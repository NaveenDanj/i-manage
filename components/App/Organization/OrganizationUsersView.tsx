/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import UserCard from '../UserCard';
import Colors from '../../Colors';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';
import OrganizationService from '../../../services/Organization.Service';
import {UserDTO} from '../../../dto';

const OrganizationUsersView = () => {
  const [users, setUsers] = useState<UserDTO[]>([]);
  const currentOrg = useSelector(
    (state: RootState) => state.orgnaization.currentOrganization,
  );

  useEffect(() => {
    const fetchUsers = async () => {
      if (!currentOrg) {
        return;
      }

      const users = await OrganizationService.getOrganizationsUser(
        currentOrg.users,
      );

      setUsers(users.users);
    };

    fetchUsers();
  }, [currentOrg]);

  return (
    <View style={{paddingVertical: 20}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 30,
          marginTop: 30,
        }}>
        <Text
          style={{
            marginVertical: 'auto',
            fontWeight: '600',
            fontSize: 20,
            color: Colors.dark.text,
          }}>
          Users
        </Text>
        <Text
          style={{
            marginTop: 4,
            fontWeight: '600',
            fontSize: 13,
            color: '#246BFD',
          }}>
          Manage
        </Text>
      </View>

      <View style={{display: 'flex', gap: 20, marginBottom: 20}}>
        {users.map(item => (
          <UserCard key={item.user.uid} user={item} />
        ))}
      </View>
    </View>
  );
};

export default OrganizationUsersView;
