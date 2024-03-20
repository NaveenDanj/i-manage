/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../../../components/Colors';

const UserTab = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, paddingHorizontal: 10, paddingBottom: 30}}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: 20,
          }}>
          <Text
            style={{fontSize: 24, fontWeight: '700', color: Colors.dark.text}}>
            Your Profile
          </Text>
          <Text style={{fontSize: 15, marginTop: 10, color: Colors.dark.text}}>
            Don't worry. You can always change it later.
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: 50,
          }}>
          <Image
            style={{
              borderColor: '#246BFD',
              borderWidth: 3,
              width: 150,
              height: 150,
              borderRadius: 75,
            }}
            source={{
              uri: 'https://avatars.githubusercontent.com/u/48654030?v=4',
            }}
          />

          <TouchableOpacity
            style={{
              backgroundColor: '#246BFD',
              padding: 5,
              borderRadius: 3,
              position: 'relative',
              top: -28,
              left: 50,
            }}>
            <Entypo name="edit" size={12} color="white" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: 'flex',
            gap: 25,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: 20,
          }}>
          <View
            style={{
              gap: 10,
              padding: 5,
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              backgroundColor: '#1F222A',
              borderRadius: 10,
            }}>
            <TextInput
              placeholderTextColor={'gray'}
              style={{flex: 1, color: 'white'}}
              placeholder="Your Full name"
            />
          </View>

          {/* Repeat the above TextInput block for each input */}

          <View
            style={{
              gap: 10,
              padding: 5,
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              backgroundColor: '#1F222A',
              borderRadius: 10,
            }}>
            <TextInput
              placeholderTextColor={'gray'}
              style={{flex: 1, color: 'white'}}
              placeholder="Email"
            />
            <Entypo
              style={{marginTop: 18, marginRight: 10}}
              name="email"
              size={12}
              color="gray"
            />
          </View>

          <View
            style={{
              gap: 10,
              padding: 5,
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              backgroundColor: '#1F222A',
              borderRadius: 10,
            }}>
            <TextInput
              placeholderTextColor={'gray'}
              style={{flex: 1, color: 'white'}}
              placeholder="Your phone"
            />
          </View>

          <TouchableOpacity
            style={{
              marginTop: 15,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 20,
              backgroundColor: '#246BFD',
              width: '100%',
              borderRadius: 30,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '700',
                position: 'relative',
                color: Colors.dark.text,
              }}>
              Update
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UserTab;
