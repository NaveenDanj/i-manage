import {GoogleSignin} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';

import auth from '@react-native-firebase/auth';
import {User} from '../types';

GoogleSignin.configure({
  webClientId:
    '396659194291-6n9nmc8r00k7h717f4sbeca8qigjkb2c.apps.googleusercontent.com',
});

export default {
  googleSignIn: async () => {
    // await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const userCred = await auth().signInWithCredential(googleCredential);

    if (!userCred || !userCred.additionalUserInfo?.profile) {
      return {
        success: false,
        message: 'User credentials not valid',
      };
    }

    if (userCred.additionalUserInfo?.isNewUser) {
      const user: User = {
        email: userCred.user.email + '',
        given_name: userCred.additionalUserInfo.profile.given_name,
        family_name: userCred.additionalUserInfo.profile.family_name,
        name: userCred.user.displayName + '',
        picture: userCred.user.photoURL + '',
        phoneNumber: userCred.user.phoneNumber + '',
        uid: userCred.user.uid,
        organizations: [],
      };
      await firestore().collection('Users').doc(userCred.user.uid).set(user);
    }

    return {
      success: true,
      message: '',
    };
  },

  isSignedIn: async () => {
    return await GoogleSignin.isSignedIn();
  },

  getCurrentUser: async () => {
    try {
      const res = await GoogleSignin.getCurrentUser();

      return {
        success: true,
        user: res,
        message: '',
      };
    } catch (err) {
      return {
        success: false,
        user: null,
        message: 'Error while fetching current user Information',
      };
    }
  },

  signOut: async () => {
    try {
      await GoogleSignin.signOut();
      return {
        success: true,
        message: '',
      };
    } catch (error) {
      return {
        success: false,
        message: error + '',
      };
    }
  },

  searchUser: async (query: string) => {
    try {
      const res = await firestore()
        .collection('Users')
        .where('email', '==', query)
        .get();

      if (res.docs.length === 0) {
        return {
          success: true,
          user: null,
        };
      }

      return {
        success: true,
        user: res.docs[0].data() as User,
      };
    } catch (error) {
      return {
        success: false,
        users: [],
      };
    }
  },
};
