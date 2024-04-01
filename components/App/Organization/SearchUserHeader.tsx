/* eslint-disable react-native/no-inline-styles */
import {FlatList, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import SelectUserCard from './SelectUserCard';
import Octicons from 'react-native-vector-icons/Octicons';
import Colors from '../../Colors';
import AuthService from '../../../services/Auth.service';
import {User} from '../../../types';

type IProp = {
  handleSetUsers: any;
};

const Seperator = () => {
  return <View style={{padding: 10}} />;
};

const SearchUserHeader = ({handleSetUsers}: IProp) => {
  const [users, setUsers] = useState<User[]>([]);

  const handleSearch = async (e: string) => {
    if (e.indexOf('@gmail.com') >= 0) {
      setUsers([]);
      const res = await AuthService.searchUser(e);

      if (!res.user) {
        return;
      }

      setUsers([res.user]);
      console.log(res);
    }
  };

  return (
    <View style={{paddingBottom: 40}}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: 50,
        }}>
        <View
          style={{
            backgroundColor: '#27A878',
            padding: 25,
            borderRadius: 100,
          }}>
          <Octicons name="organization" size={30} color={'white'} />
        </View>
      </View>

      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '700',
            color: Colors.dark.text,
          }}>
          Create new Organization
        </Text>
        <Text
          style={{
            fontSize: 13,
            marginTop: 5,
            color: Colors.dark.text,
            textAlign: 'center',
          }}>
          Start by creating your organization to manage finances efficiently and
          collaborate seamlessly with your team.
        </Text>
      </View>

      <View
        style={{
          marginTop: 20,
          borderTopWidth: 1,
          borderColor: 'rgba(127,127,127 , 0.5)',
        }}
      />

      <Text style={{color: 'white', fontSize: 18, marginTop: 20}}>
        Select users for this organization
      </Text>

      <View
        style={{
          marginTop: 20,
          gap: 10,
          padding: 2,
          paddingHorizontal: 8,
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          backgroundColor: '#1F222A',
          borderRadius: 10,
        }}>
        <TextInput
          onChangeText={handleSearch}
          placeholderTextColor={'gray'}
          style={{flex: 1, color: 'white'}}
          placeholder="Search user by email"
        />
      </View>

      <FlatList
        style={{marginTop: 40}}
        data={users}
        renderItem={item => (
          <SelectUserCard user={item.item} setUsers={handleSetUsers} />
        )}
        ItemSeparatorComponent={Seperator}
        showsVerticalScrollIndicator={false}
      />

      <View
        style={{
          marginTop: 40,
          borderTopWidth: 1,
          borderColor: 'rgba(127,127,127 , 0.5)',
        }}
      />
    </View>
  );
};

export default SearchUserHeader;
