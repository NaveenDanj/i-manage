/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import PageHeader from './PageHeader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../Colors';

type IProp = {
  handleNext: any;
};

const CreateCollectionPage2 = ({handleNext}: IProp) => {
  return (
    <View>
      <View>
        <PageHeader />

        <Text style={{color: 'white', fontSize: 18, marginTop: 35}}>
          Select recuring type
        </Text>

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
            paddingVertical: 10,
            marginTop: 25,
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
                <MaterialIcons name="attach-money" color={'white'} size={13} />
              </View>

              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  marginLeft: 10,
                  fontWeight: '600',
                }}>
                LKR
              </Text>
            </View>

            <Text style={{fontSize: 18, color: 'white', fontWeight: '600'}}>
              LKR 1250.00 / Week
            </Text>
          </View>
        </View>

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
            paddingVertical: 10,
            marginTop: 25,
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
                <MaterialIcons name="attach-money" color={'white'} size={13} />
              </View>

              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  marginLeft: 10,
                  fontWeight: '600',
                }}>
                LKR
              </Text>
            </View>

            <Text style={{fontSize: 18, color: 'white', fontWeight: '600'}}>
              LKR 1250.00 / Month
            </Text>
          </View>
        </View>

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
            paddingVertical: 10,
            marginTop: 25,
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
                <MaterialIcons name="attach-money" color={'white'} size={13} />
              </View>

              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  marginLeft: 10,
                  fontWeight: '600',
                }}>
                LKR
              </Text>
            </View>

            <Text style={{fontSize: 18, color: 'white', fontWeight: '600'}}>
              LKR 1250.00 / Day
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={handleNext}
          style={{
            marginTop: 25,
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
    </View>
  );
};

export default CreateCollectionPage2;
