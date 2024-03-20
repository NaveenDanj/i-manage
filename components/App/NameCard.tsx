/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View, Text} from 'react-native';
import Colors from '../Colors';
function NameCard() {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 'auto',
        gap: 15,
        backgroundColor: '#121212',
        paddingVertical: 8,
        paddingHorizontal: 5,
      }}>
      <View style={{flexDirection: 'row', backgroundColor: '#121212'}}>
        <Image
          style={{width: 40, height: 40, borderRadius: 20}}
          source={{uri: 'https://avatars.githubusercontent.com/u/48654030?v=4'}}
        />
      </View>

      <View
        style={{
          flexDirection: 'column',
          gap: 1,
          backgroundColor: '#121212',
        }}>
        <Text style={{fontSize: 13, color: Colors.dark.text}}>
          Good Morning 👋
        </Text>
        <Text
          style={{fontSize: 16, fontWeight: '600', color: Colors.dark.text}}>
          Andrew Ainsley
        </Text>
      </View>
    </View>
  );
}

export default NameCard;
