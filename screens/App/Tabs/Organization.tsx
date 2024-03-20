/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import CollectionCard from '../../../components/App/CollectionCard';
import UserCard from '../../../components/App/UserCard';
import OrganizationCard from '@/components/App/OrganizationCard';
import TransactionItem from '../../../components/App/TransactionItem';

const Organization = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{flex: 1, paddingHorizontal: 10, paddingVertical: 20}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginVertical: 30,
          marginTop: 10,
        }}>
        <Text style={{marginVertical: 'auto', fontWeight: '600', fontSize: 20}}>
          Organizations
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

      <View style={{display: 'flex', gap: 20}}>
        <OrganizationCard selected={true} />
        <OrganizationCard selected={false} />
        <OrganizationCard selected={false} />
        <OrganizationCard selected={false} />
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginVertical: 30,
          marginTop: 30,
        }}>
        <Text style={{marginVertical: 'auto', fontWeight: '600', fontSize: 20}}>
          Collections
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

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
      </ScrollView>

      <View style={{paddingHorizontal: 10, paddingVertical: 20}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginVertical: 30,
            marginTop: 30,
          }}>
          <Text
            style={{marginVertical: 'auto', fontWeight: '600', fontSize: 20}}>
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
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </View>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <Text style={{marginVertical: 'auto', fontWeight: '600', fontSize: 20}}>
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
          marginHorizontal: 10,
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

export default Organization;

const styles = StyleSheet.create({});
