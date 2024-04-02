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

      await firestore().collection('Organizations').add(org);

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
};
