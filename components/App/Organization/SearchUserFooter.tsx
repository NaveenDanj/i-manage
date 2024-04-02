/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../Colors';
import {User} from '../../../types';
import OrganizationService from '../../../services/Organization.Service';
import {useNavigation} from '@react-navigation/native';

type IProp = {
  users: User[];
  name: string;
  currentUser: User | null;
};

const SearchUserFooter = ({users, name, currentUser}: IProp) => {
  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (!currentUser) {
      return;
    }

    await OrganizationService.createOrganization(name, users, currentUser);

    // @ts-ignore
    navigation.replace('dashboard');
  };

  return (
    <TouchableOpacity
      disabled={users.length === 0}
      onPress={handleSubmit}
      style={{
        marginTop: 45,
        marginBottom: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#246BFD',
        width: '100%',
        borderRadius: 30,
      }}>
      <Text
        style={{
          fontSize: 15,
          fontWeight: '700',
          position: 'relative',
          color: Colors.dark.text,
        }}>
        Save
      </Text>
    </TouchableOpacity>
  );
};

export default SearchUserFooter;
