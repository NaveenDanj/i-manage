/* eslint-disable react-native/no-inline-styles */
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import Colors from '../../Colors';

type IProp = {
  handleNext: any;
  setNameOrg: any;
};

const AddOrganizationSetp1 = ({handleNext, setNameOrg}: IProp) => {
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleNextSubmit = () => {
    setError('');
    if (!name) {
      setError('This field is required');
      return;
    }
    setNameOrg(name);
    handleNext();
  };

  return (
    <View>
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
          style={{
            fontSize: 24,
            fontWeight: '700',
            color: Colors.dark.text,
          }}>
          Create new Organization
        </Text>
        <Text
          style={{
            fontSize: 13,
            marginTop: 5,
            color: Colors.dark.text,
            textAlign: 'center',
          }}>
          Start by creating your organization to manage finances efficiently and
          collaborate seamlessly with your team.
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
          <Text style={{color: 'white', fontSize: 15}}>Organization Name</Text>
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
              onChangeText={e => setName(e)}
              placeholderTextColor={'gray'}
              style={{flex: 1, color: 'white'}}
              placeholder="Enter the organization name"
            />
          </View>
        </View>
        <Text
          style={{
            fontSize: 12,
            marginTop: 5,
            color: 'red',
            display: error ? 'flex' : 'none',
          }}>
          {error}
        </Text>
      </View>

      <TouchableOpacity
        onPress={handleNextSubmit}
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

export default AddOrganizationSetp1;
