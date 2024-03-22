/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import UserContributionItem from './UserContributionItem';
import Colors from '../Colors';
import {useNavigation} from '@react-navigation/native';

const UserContribution = () => {
  const navigation = useNavigation();

  return (
    <View style={{display: 'flex', gap: 20, paddingTop: 30}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{fontSize: 16, fontWeight: '700', color: Colors.dark.text}}>
          2024-03 #3
        </Text>
        <TouchableOpacity
          // @ts-ignore
          onPress={() => navigation.push('CollectionPaidDetails')}>
          <Text style={{fontSize: 13, fontWeight: '700', color: '#226AFA'}}>
            View
          </Text>
        </TouchableOpacity>
      </View>

      <UserContributionItem />
      <UserContributionItem />
      <UserContributionItem />
      <UserContributionItem />
    </View>
  );
};

export default UserContribution;
