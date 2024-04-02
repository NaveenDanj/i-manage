/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity, View} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import React from 'react';
import Colors from '../Colors';
import {Organization} from '../../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {setOrganization} from '../../store/OrganizationSlice';

interface IProp {
  selected: boolean;
  org: Organization;
}

const OrganizationCard = ({selected, org}: IProp) => {
  const dispatch = useDispatch();

  const handleSelect = async () => {
    await AsyncStorage.setItem('currentOrg', org.uid + '');
    dispatch(setOrganization(org));
  };

  return (
    <TouchableOpacity
      onPress={handleSelect}
      style={{
        borderColor: selected ? '#246BFD' : '',
        borderWidth: selected ? 2 : 0,
        backgroundColor: '#1F222A',
        padding: 15,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          backgroundColor: '#1F222A',
        }}>
        {/* <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={{ uri: 'https://avatars.githubusercontent.com/u/48654030?v=4' }} /> */}
        <View
          style={{
            backgroundColor: '#30D475',
            width: 50,
            height: 50,
            borderRadius: 30,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Octicons name="organization" size={15} color="white" />
        </View>

        <View style={{marginVertical: 'auto', backgroundColor: '#1F222A'}}>
          <Text
            style={{
              marginTop: 4,
              fontSize: 16,
              fontWeight: '600',
              color: Colors.dark.text,
            }}>
            {org.name}
          </Text>
          <Text
            style={{
              color: '#A5A6A9',
              marginTop: 5,
              fontSize: 12,
              fontWeight: '600',
            }}>
            {org.users.length} Users | Created 2023-05-05
          </Text>
        </View>
      </View>

      <View style={{backgroundColor: '#1F222A', marginTop: 12}}>
        {selected ? (
          <Fontisto name="radio-btn-active" size={20} color="#246BFD" />
        ) : (
          <Fontisto name="radio-btn-passive" size={20} color="#246BFD" />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default OrganizationCard;
