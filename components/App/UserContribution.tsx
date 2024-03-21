/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import React from 'react';
import UserContributionItem from './UserContributionItem';
import Colors from '../Colors';

const UserContribution = () => {
  return (
    <View style={{display: 'flex', gap: 20, paddingTop: 30}}>
      <Text style={{fontSize: 16, fontWeight: '700', color: Colors.dark.text}}>
        2024-03 #3
      </Text>

      <UserContributionItem />
      <UserContributionItem />
      <UserContributionItem />
      <UserContributionItem />
    </View>
  );
};

export default UserContribution;
