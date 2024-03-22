/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import React from 'react';
import Colors from '../Colors';

const UserContributionItemDetails = () => {
  return (
    <View
      style={{
        marginTop: 20,
        borderRadius: 10,
        padding: 20,
        backgroundColor: '#181920',
        gap: 5,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: '#D2D2D4'}}>Paid Amount</Text>
        <Text style={{color: Colors.dark.text}}>LKR 1200.00</Text>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: '#D2D2D4'}}>Installment Amount</Text>
        <Text style={{color: Colors.dark.text}}>LKR 1200.00</Text>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: '#D2D2D4'}}>Previous Debt</Text>
        <Text style={{color: Colors.dark.text}}>LKR 650.00</Text>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: '#D2D2D4',
            paddingHorizontal: 5,
            paddingVertical: 2,
            backgroundColor: 'red',
            borderRadius: 5,
          }}>
          New Debt
        </Text>
        <Text
          style={{
            color: '#D2D2D4',
            paddingHorizontal: 5,
            paddingVertical: 2,
            backgroundColor: 'red',
            borderRadius: 5,
          }}>
          LKR 650.00
        </Text>
      </View>
    </View>
  );
};

export default UserContributionItemDetails;
