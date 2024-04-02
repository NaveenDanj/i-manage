/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../../Colors';
// import OrganizationCard from '../OrganizationCard';
import Octicons from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';
import OrganizationService from '../../../services/Organization.Service';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';
import {Organization} from '../../../types';
import OrganizationCard from '../OrganizationCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OrganizationView = () => {
  const navigation = useNavigation();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const currentOrganization = useSelector(
    (state: RootState) => state.orgnaization.currentOrganization,
  );
  const [orgs, setOrgs] = useState<Organization[]>([]);
  const [currentOrg, setCurrentOrg] = useState<string>('');

  useEffect(() => {
    const fetchOrgs = async () => {
      if (!currentUser) {
        return;
      }
      const res = await OrganizationService.getUserOrganizations(
        currentUser?.organizations,
      );
      setOrgs(res.orgs);
      const org = await AsyncStorage.getItem('currentOrg');

      if (!org) {
        setCurrentOrg('');
        return;
      }
      setCurrentOrg(org);
    };

    fetchOrgs();
  }, []);

  useEffect(() => {
    setCurrentOrg(currentOrganization?.uid + '');
  }, [currentOrganization]);

  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 30,
          marginTop: 10,
        }}>
        <Text
          style={{
            marginVertical: 'auto',
            fontWeight: '600',
            fontSize: 20,
            color: Colors.dark.text,
          }}>
          Organizations
        </Text>
        {/* @ts-ignore */}
        <TouchableOpacity onPress={() => navigation.push('AddOrganization')}>
          <Text
            style={{
              marginTop: 4,
              fontWeight: '600',
              fontSize: 13,
              color: '#246BFD',
            }}>
            Add
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          display: orgs.length === 0 ? 'flex' : 'none',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
          padding: 50,
        }}>
        <Octicons name="organization" size={45} color="#226BFD" />
        <Text style={{color: 'white', fontSize: 15, fontWeight: '600'}}>
          List is currently empty
        </Text>

        <Text
          style={{
            color: 'gray',
            fontSize: 12,
            textAlign: 'center',
          }}>
          Create new organization by click on the Add button and fill out
          required information.
        </Text>
      </View>

      <View style={{display: 'flex', gap: 20}}>
        {orgs.map(_item => (
          <OrganizationCard
            key={_item.uid}
            org={_item}
            selected={currentOrg === _item.uid}
          />
        ))}
      </View>
    </View>
  );
};

export default OrganizationView;
