/* eslint-disable react-native/no-inline-styles */
import {Image, Text, View} from 'react-native';
import React from 'react';
import Colors from '../Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const RequestItem = () => {
  return (
    <View style={{backgroundColor: '#1F222A', padding: 15, borderRadius: 10}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            backgroundColor: '#1F222A',
          }}>
          <Image
            style={{width: 50, height: 50, borderRadius: 25}}
            source={{
              uri: 'https://avatars.githubusercontent.com/u/48654030?v=4',
            }}
          />

          <View style={{marginVertical: 'auto', backgroundColor: '#1F222A'}}>
            <Text
              style={{
                marginTop: 4,
                fontSize: 16,
                fontWeight: '600',
                color: Colors.dark.text,
              }}>
              Andrew Ainsley
            </Text>
            <Text
              style={{
                color: '#A5A6A9',
                marginTop: 5,
                fontSize: 12,
                fontWeight: '600',
              }}>
              Dec 24, 2024 | 11:36:28 PM
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#1F222A',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <Text
            style={{
              marginTop: 4,
              fontSize: 13,
              fontWeight: '600',
              color: '#246BFD',
            }}>
            LKR 600.00
          </Text>

          <MaterialIcons name="expand-circle-down" size={24} color="#30D475" />
        </View>
      </View>

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
          <Text style={{color: '#D2D2D4'}}>Request Amount</Text>
          <Text style={{color: Colors.dark.text}}>LKR 600.00</Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#D2D2D4'}}>Daily Limit</Text>
          <Text style={{color: Colors.dark.text}}>LKR 400.00</Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#D2D2D4'}}>Note</Text>
          <Text style={{color: Colors.dark.text}}>Kama salli deepiya</Text>
        </View>
      </View>
    </View>
  );
};

export default RequestItem;
