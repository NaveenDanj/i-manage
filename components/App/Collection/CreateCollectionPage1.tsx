/* eslint-disable react-native/no-inline-styles */
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../../Colors';
import PageHeader from './PageHeader';

type IProp = {
  handleNext: any;
};

const CreateCollectionPage1 = ({handleNext}: IProp) => {
  return (
    <View>
      <PageHeader />

      <View style={{marginTop: 35}}>
        <View style={{display: 'flex', gap: 10}}>
          <Text style={{color: 'white', fontSize: 15}}>Collection Name</Text>
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
              placeholder="Enter the collection name"
            />
          </View>
        </View>
      </View>

      <View style={{marginTop: 15}}>
        <View style={{display: 'flex', gap: 10}}>
          <Text style={{color: 'white', fontSize: 15}}>Installment Amount</Text>
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
              inputMode="numeric"
              placeholderTextColor={'gray'}
              style={{flex: 1, color: 'white'}}
              placeholder="Set the installment amount"
            />
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={handleNext}
        style={{
          marginTop: 45,
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
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateCollectionPage1;
