/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../Colors';
import {User} from '../../../types';

type IProp = {
  users: User[];
  name: string;
};

const SearchUserFooter = ({users, name}: IProp) => {
  const handleSubmit = async () => {};

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
