/* eslint-disable react-native/no-inline-styles */
import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../Colors';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CollectionView = () => {
  const navigation = useNavigation();

  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 30,
          marginTop: 30,
        }}>
        <Text
          style={{
            marginVertical: 'auto',
            fontWeight: '600',
            fontSize: 20,
            color: Colors.dark.text,
          }}>
          Collections
        </Text>
        {/* @ts-ignore */}
        <TouchableOpacity onPress={() => navigation.push('CreateCollection')}>
          <Text
            style={{
              marginTop: 4,
              fontWeight: '600',
              fontSize: 13,
              color: '#246BFD',
            }}>
            Add
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
          padding: 50,
        }}>
        <MaterialIcons name="collections-bookmark" size={45} color="#226BFD" />
        <Text style={{color: 'white', fontSize: 15, fontWeight: '600'}}>
          List is currently empty
        </Text>

        <Text
          style={{
            color: 'gray',
            fontSize: 12,
            textAlign: 'center',
          }}>
          Create new collection by click on the Add button and fill out required
          information.
        </Text>
      </View>

      {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
      </ScrollView> */}
    </>
  );
};

export default CollectionView;
