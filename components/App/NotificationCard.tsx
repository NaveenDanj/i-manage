/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import Colors from '../Colors';

const NotificationCard = () => {
  return (
    <View style={{backgroundColor: '#1F222A', padding: 18, borderRadius: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#1F222A',
        }}>
        <View
          style={{flexDirection: 'row', gap: 10, backgroundColor: '#1F222A'}}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: '#21C065',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="checkcircle" size={24} color="white" />
          </View>

          <View
            style={{
              maxWidth: '80%',
              flexShrink: 1,
              backgroundColor: '#1F222A',
            }}>
            <Text
              style={{
                marginTop: 4,
                fontSize: 16,
                fontWeight: '600',
                color: Colors.dark.text,
              }}>
              You Request approved
            </Text>
            <Text
              style={{
                color: '#A5A6A9',
                marginTop: 5,
                fontSize: 12,
                fontWeight: '600',
              }}
              numberOfLines={2}
              ellipsizeMode="tail">
              Your payment request has been approved
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NotificationCard;
