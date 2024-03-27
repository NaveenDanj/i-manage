/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View, Text, Pressable} from 'react-native';
import Colors from '../Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

// @ts-ignore
function NameCard() {
  const navigation = useNavigation();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 'auto',
        gap: 15,
        backgroundColor: '#121212',
        paddingVertical: 8,
        paddingHorizontal: 5,
        justifyContent: 'space-between',
      }}>
      <View style={{display: 'flex', flexDirection: 'row', gap: 15}}>
        <View style={{flexDirection: 'row', backgroundColor: '#121212'}}>
          <Image
            style={{width: 40, height: 40, borderRadius: 20}}
            source={{
              uri: currentUser?.picture,
            }}
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
            {currentUser?.name}
          </Text>
        </View>
      </View>

      <View
        style={{display: 'flex', flexDirection: 'row', marginTop: 10, gap: 20}}>
        {/* @ts-ignore */}
        <Pressable onPressOut={() => navigation.push('PayModel')}>
          {({pressed}) => (
            <FontAwesome
              name="plus"
              size={16}
              color={Colors.dark.text}
              style={{marginRight: 15, opacity: pressed ? 0.5 : 1}}
            />
          )}
        </Pressable>

        <Pressable>
          {({pressed}) => (
            <FontAwesome
              name="bell"
              size={16}
              color={Colors.dark.text}
              style={{marginRight: 15, opacity: pressed ? 0.5 : 1}}
            />
          )}
        </Pressable>
      </View>
    </View>
  );
}

export default NameCard;
