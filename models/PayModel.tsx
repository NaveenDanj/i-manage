/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../components/Colors';

const PayModel = () => {
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
            marginTop: 50,
          }}>
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
            source={{
              uri: 'https://avatars.githubusercontent.com/u/48654030?v=4',
            }}
          />
        </View>

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
            Naveen Dhananjaya
          </Text>
          <Text style={{fontSize: 13, marginTop: 5, color: Colors.dark.text}}>
            # Collection Name | $12,000
          </Text>
        </View>

        <View
          style={{
            marginTop: 20,
            borderTopWidth: 1,
            borderColor: 'rgba(127,127,127 , 0.5)',
          }}
        />

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
              padding: 13,
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              backgroundColor: '#1F222A',
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 2,
              borderColor: '#3677FD',
              paddingVertical: 20,
            }}>
            <View
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 120,
                  backgroundColor: '#35383F',
                  padding: 5,
                  borderRadius: 20,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: '#3677FE',
                    width: 24,
                    height: 24,
                    borderRadius: 100,
                    padding: 5,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 5,
                  }}>
                  <MaterialIcons
                    name="attach-money"
                    color={'white'}
                    size={13}
                  />
                </View>

                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    marginLeft: 10,
                    fontWeight: '700',
                  }}>
                  LKR
                </Text>
              </View>

              <Text style={{fontSize: 18, color: 'white', fontWeight: '600'}}>
                LKR 1250.00
              </Text>
            </View>
          </View>

          {/* Repeat the above TextInput block for each input */}

          <View style={{display: 'flex', gap: 10}}>
            <Text style={{color: 'white', fontSize: 15}}>Request amount</Text>

            <View
              style={{
                gap: 10,
                padding: 2,
                paddingHorizontal: 8,
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
                placeholder="Enter the requesting amount"
              />
            </View>
          </View>

          <View style={{display: 'flex', gap: 10, marginTop: 5}}>
            <Text style={{color: 'white', fontSize: 15}}>Notes</Text>

            <View
              style={{
                gap: 10,
                padding: 2,
                paddingHorizontal: 8,
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
                placeholder="Enter reference note"
              />
            </View>
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
              Send Request
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PayModel;
