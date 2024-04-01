/* eslint-disable react-native/no-inline-styles */
import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../Colors';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {User} from '../../../types';

type IProp = {
  user: User;
  setUsers: any;
};

const SelectUserCard = ({user, setUsers}: IProp) => {
  const [selected, setSelected] = useState<boolean>(false);

  const handleSelected = async () => {
    setSelected(!selected);
    setUsers(user);
  };

  return (
    <TouchableOpacity
      onPress={handleSelected}
      style={{
        backgroundColor: '#1F222A',
        padding: 15,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: selected ? 2 : 0,
        borderColor: selected ? '#226BFD' : '',
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          backgroundColor: '#1F222A',
        }}>
        <Image
          style={{width: 50, height: 50, borderRadius: 25}}
          source={{uri: user.picture}}
        />

        <View style={{marginVertical: 'auto', backgroundColor: '#1F222A'}}>
          <Text
            style={{
              marginTop: 4,
              fontSize: 16,
              fontWeight: '600',
              color: Colors.dark.text,
            }}>
            {user.name}
          </Text>
          <Text
            style={{
              color: '#A5A6A9',
              marginTop: 5,
              fontSize: 12,
              fontWeight: '600',
            }}>
            {user.email}
          </Text>
        </View>
      </View>

      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#1F222A',
          marginVertical: 'auto',
        }}>
        {selected ? (
          <Fontisto name="radio-btn-active" size={24} color="#226BFD" />
        ) : (
          <Fontisto name="radio-btn-passive" size={24} color="#226BFD" />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SelectUserCard;
