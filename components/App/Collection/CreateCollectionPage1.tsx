/* eslint-disable react-native/no-inline-styles */
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../Colors';
import PageHeader from './PageHeader';
import {CreateCollectionDTO} from '../../../dto';
import Fontisto from 'react-native-vector-icons/Fontisto';

type IProp = {
  handleNext: any;
  form: CreateCollectionDTO;
  setForm: any;
};

const CreateCollectionPage1 = ({handleNext, form, setForm}: IProp) => {
  const [errorName, setErrorName] = useState<string>('');
  const [errorInstallment, setErrorInstallment] = useState<string>('');

  const handleSubmitNext = () => {
    setErrorInstallment('');
    setErrorName('');
    console.log('install => ', form);

    if (form.name === '') {
      setErrorName('Collection name is required');
      return;
    }

    if (isNaN(form.installmentAmount) || form.installmentAmount === 0) {
      setErrorInstallment('Installment amount is required');
      return;
    }

    handleNext();
  };

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
              value={form.name}
              onChangeText={e => setForm({...form, name: e})}
              placeholderTextColor={'gray'}
              style={{flex: 1, color: 'white'}}
              placeholder="Enter the collection name"
            />
          </View>
        </View>
        <Text
          style={{
            fontSize: 12,
            marginTop: 5,
            color: 'red',
            display: errorName ? 'flex' : 'none',
          }}>
          {errorName}
        </Text>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          marginTop: 15,
          justifyContent: 'space-between',
        }}>
        <View style={{display: 'flex', gap: 10}}>
          <Text style={{color: 'white', fontSize: 15}}>Installment Amount</Text>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 25,
            }}>
            <View style={{width: '50%'}}>
              <View
                style={{
                  gap: 10,
                  padding: 2,
                  paddingHorizontal: 8,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  backgroundColor: '#1F222A',
                  borderRadius: 10,
                  width: '100%',
                }}>
                <TextInput
                  keyboardType="number-pad"
                  //@ts-ignore
                  value={form.installmentAmount}
                  onChangeText={e =>
                    setForm({...form, installmentAmount: parseInt(e)})
                  }
                  inputMode="numeric"
                  placeholderTextColor={'gray'}
                  style={{flex: 1, color: 'white'}}
                  placeholder="Set the installment amount"
                />
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '50%',
              }}>
              <View
                style={{
                  marginTop: 0,
                  backgroundColor: '#35383F',
                  padding: 2,
                  paddingHorizontal: 8,
                  borderRadius: 20,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 2,
                  borderColor: '#3677FD',
                  height: 50,
                  marginVertical: 'auto',
                }}>
                <View
                  style={{
                    backgroundColor: '#3677FE',
                    width: 24,
                    height: 24,
                    borderRadius: 100,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 5,
                  }}>
                  <Fontisto name="radio-btn-active" size={12} color="white" />
                </View>

                <Text
                  style={{
                    color: 'white',
                    fontSize: 12,
                    marginLeft: 10,
                    fontWeight: '600',
                  }}>
                  Variable Amount
                </Text>
              </View>
            </View>
          </View>

          <Text
            style={{
              fontSize: 12,
              marginTop: 5,
              color: 'red',
              display: errorInstallment ? 'flex' : 'none',
            }}>
            {errorInstallment}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={handleSubmitNext}
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
