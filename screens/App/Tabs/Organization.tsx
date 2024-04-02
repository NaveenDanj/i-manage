/* eslint-disable react-native/no-inline-styles */
import {ScrollView, View, Text} from 'react-native';
import React from 'react';
import TransactionItem from '../../../components/App/TransactionItem';
import Colors from '../../../components/Colors';
import OrganizationView from '../../../components/App/Organization/OrganizationView';
import CollectionView from '../../../components/App/Organization/CollectionView';
import OrganizationUsersView from '../../../components/App/Organization/OrganizationUsersView';

const OrganizationTab = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{flex: 1, paddingHorizontal: 10, paddingVertical: 20}}>
      <OrganizationView />

      <CollectionView />

      <OrganizationUsersView />

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            marginVertical: 'auto',
            fontWeight: '600',
            fontSize: 20,
            color: Colors.dark.text,
          }}>
          Transactions
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

      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginVertical: 30,
          gap: 20,
        }}>
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
      </View>
    </ScrollView>
  );
};

export default OrganizationTab;
