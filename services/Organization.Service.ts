import {Organization, User} from '../types';
import firestore from '@react-native-firebase/firestore';

export default {
  createOrganization: async (
    name: string,
    users: User[],
    currentUser: User,
  ) => {
    try {
      const _users = [];

      _users.push({userId: currentUser.uid, role: 'Admin'});

      for (let i = 0; i < users.length; i++) {
        _users.push({userId: users[i].uid, role: 'Member'});
      }

      const org: Organization = {
        name: name,
        users: _users,
        collections: [],
      };

      const res = await firestore().collection('Organizations').add(org);

      await res.update({
        uid: res.id,
      });

      for (let i = 0; i < users.length; i++) {
        await firestore()
          .collection('Users')
          .doc(users[i].uid)
          .update({
            organizations: firestore.FieldValue.arrayUnion(res.id),
          });
      }

      await firestore()
        .collection('Users')
        .doc(currentUser.uid)
        .update({
          organizations: firestore.FieldValue.arrayUnion(res.id),
        });

      return {
        success: true,
        message: '',
      };
    } catch (err) {
      return {
        success: false,
        message: err,
      };
    }
  },

  getUserOrganizations: async (uids: string[]) => {
    try {
      const res = await firestore()
        .collection('Organizations')
        .where(firestore.FieldPath.documentId(), 'in', uids)
        .get();

      return {
        success: true,
        message: '',
        orgs: res.docs.map(item => item.data() as Organization),
      };
    } catch (err) {
      return {
        success: false,
        message: err,
        orgs: [],
      };
    }
  },

  getOrganization: async (uid: string) => {
    try {
      const res = await firestore()
        .collection('Organizations')
        .where(firestore.FieldPath.documentId(), '==', uid)
        .get();

      return {
        success: true,
        message: '',
        org: res.docs[0].data() as Organization,
      };
    } catch (err) {
      return {
        success: false,
        message: err,
        org: null,
      };
    }
  },
};
