import {GoogleSignin} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';

import auth from '@react-native-firebase/auth';

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

    if (userCred.additionalUserInfo?.isNewUser) {
      await firestore()
        .collection('Users')
        .doc(userCred.user.uid)
        .set(userCred);
    }

    return userCred;
  },
};
