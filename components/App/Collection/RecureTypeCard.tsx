/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import React from 'react';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

type IProp = {
  selected: boolean;
};

const RecureTypeCard = ({selected}: IProp) => {
  return (
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
        borderWidth: selected ? 2 : 0,
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
            {selected ? (
              <Fontisto name="radio-btn-active" size={13} color="white" />
            ) : (
              <Fontisto name="radio-btn-passive" size={13} color="white" />
            )}
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
  );
};

export default RecureTypeCard;
