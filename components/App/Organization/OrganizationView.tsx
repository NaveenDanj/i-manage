/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../../Colors';
// import OrganizationCard from '../OrganizationCard';
import Octicons from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';

const OrganizationView = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
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
          display: 'flex',
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

      {/* <View style={{display: 'flex', gap: 20}}>
        <OrganizationCard selected={true} />
        <OrganizationCard selected={false} />
        <OrganizationCard selected={false} />
        <OrganizationCard selected={false} />
      </View> */}
    </View>
  );
};

export default OrganizationView;
