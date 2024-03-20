/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import React from 'react';

interface IProp {
  selected: boolean;
}

const OrganizationCard = ({selected}: IProp) => {
  return (
    <View
      style={{
        borderColor: selected ? '#246BFD' : '',
        borderWidth: selected ? 2 : 0,
        backgroundColor: '#1F222A',
        padding: 15,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          backgroundColor: '#1F222A',
        }}>
        {/* <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={{ uri: 'https://avatars.githubusercontent.com/u/48654030?v=4' }} /> */}
        <View
          style={{
            backgroundColor: '#30D475',
            width: 50,
            height: 50,
            borderRadius: 30,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Octicons name="organization" size={15} color="white" />
        </View>

        <View style={{marginVertical: 'auto', backgroundColor: '#1F222A'}}>
          <Text style={{marginTop: 4, fontSize: 16, fontWeight: '600'}}>
            Dupatha Boarding Place
          </Text>
          <Text
            style={{
              color: '#A5A6A9',
              marginTop: 5,
              fontSize: 12,
              fontWeight: '600',
            }}>
            12 Users | Created 203-05-05
          </Text>
        </View>
      </View>

      <View style={{backgroundColor: '#1F222A', marginTop: 12}}>
        {selected ? (
          <Fontisto name="radio-btn-active" size={20} color="#246BFD" />
        ) : (
          <Fontisto name="radio-btn-passive" size={20} color="#246BFD" />
        )}
      </View>
    </View>
  );
};

export default OrganizationCard;
