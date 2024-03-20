/* eslint-disable react-native/no-inline-styles */
import {Image, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

const UserCard = () => {
  return (
    <View
      style={{
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
        <Image
          style={{width: 50, height: 50, borderRadius: 25}}
          source={{uri: 'https://avatars.githubusercontent.com/u/48654030?v=4'}}
        />

        <View style={{marginVertical: 'auto', backgroundColor: '#1F222A'}}>
          <Text style={{marginTop: 4, fontSize: 16, fontWeight: '600'}}>
            Andrew Ainsley
          </Text>
          <Text
            style={{
              color: '#A5A6A9',
              marginTop: 5,
              fontSize: 12,
              fontWeight: '600',
            }}>
            Admin | Joined 203-05-05
          </Text>
        </View>
      </View>

      <View
        style={{
          marginTop: 3,
          backgroundColor: '#1F222A',
          marginVertical: 'auto',
        }}>
        <MaterialIcons name="expand-circle-down" size={24} color="#30D475" />
      </View>
    </View>
  );
};

export default UserCard;
