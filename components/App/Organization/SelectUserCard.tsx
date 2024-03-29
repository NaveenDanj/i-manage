/* eslint-disable react-native/no-inline-styles */
import {Image, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../Colors';
import Fontisto from 'react-native-vector-icons/Fontisto';

const SelectUserCard = () => {
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
            naveenhettiwaththa@gmail.com
          </Text>
        </View>
      </View>

      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#1F222A',
          marginVertical: 'auto',
        }}>
        <Fontisto name="radio-btn-passive" size={24} color="#226BFD" />
      </View>
    </View>
  );
};

export default SelectUserCard;
