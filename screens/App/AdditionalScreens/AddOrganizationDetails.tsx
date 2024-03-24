/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../../components/Colors';
import Octicons from 'react-native-vector-icons/Octicons';

const AddOrganizationDetails = () => {
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
          <View
            style={{
              backgroundColor: '#27A878',
              padding: 25,
              borderRadius: 100,
            }}>
            <Octicons name="organization" size={30} color={'white'} />
          </View>
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
            Create new Organization
          </Text>
          <Text
            style={{
              fontSize: 13,
              marginTop: 5,
              color: Colors.dark.text,
              textAlign: 'center',
            }}>
            Start by creating your organization to manage finances efficiently
            and collaborate seamlessly with your team.
          </Text>
        </View>

        <View
          style={{
            marginTop: 20,
            borderTopWidth: 1,
            borderColor: 'rgba(127,127,127 , 0.5)',
          }}
        />

        <View style={{marginTop: 35}}>
          <View style={{display: 'flex', gap: 10}}>
            <Text style={{color: 'white', fontSize: 15}}>
              Organization Name
            </Text>
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
                placeholder="Enter the organization name"
              />
            </View>
          </View>
        </View>

        <View style={{marginTop: 35}}>
          <View style={{display: 'flex', gap: 10}}>
            <Text style={{color: 'white', fontSize: 15}}>Description</Text>
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
                placeholder="Enter the organization description"
              />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Send Request Button */}
      <TouchableOpacity
        // onPress={() => navigation.push('RequestDetails')}
        style={{
          marginBottom: 20,
          marginHorizontal: 20,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          backgroundColor: '#246BFD',
          borderRadius: 30,
        }}>
        <Text
          style={{fontSize: 15, fontWeight: '700', color: Colors.dark.text}}>
          Next
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default AddOrganizationDetails;
