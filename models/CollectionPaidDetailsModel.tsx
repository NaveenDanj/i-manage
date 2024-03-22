/* eslint-disable react-native/no-inline-styles */
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import Colors from '../components/Colors';
import UserCard from '../components/App/UserCard';

const CollectionDetailModelHeader = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 30,
        marginBottom: 20,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            display: 'flex',
            width: '45%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            backgroundColor: '#246BFD',
            borderRadius: 30,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '700',
              position: 'relative',
              color: Colors.dark.text,
            }}>
            Paid
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: '45%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            backgroundColor: '#000000',
            borderRadius: 30,
            borderWidth: 2,
            borderColor: '#226BFD',
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '700',
              position: 'relative',
              color: '#226BFD',
            }}>
            Un-paid
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginTop: 25,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: Colors.dark.text, fontWeight: '600'}}>
          Showing 25 of 57
        </Text>
      </View>
    </View>
  );
};

const Seperator = () => {
  return <View style={{padding: 10}} />;
};

const CollectionPaidDetailsModel = () => {
  const data = [
    {id: '1', title: 'Item 1'},
    {id: '2', title: 'Item 2'},
    {id: '3', title: 'Item 3'},
    {id: '4', title: 'Item 3'},
    {id: '5', title: 'Item 3'},
    {id: '6', title: 'Item 3'},
    {id: '7', title: 'Item 3'},
    {id: '8', title: 'Item 3'},
    {id: '9', title: 'Item 3'},
    // Add more items as needed
  ];

  return (
    <View style={{paddingHorizontal: 10}}>
      <FlatList
        style={{gap: 20}}
        data={data}
        renderItem={UserCard}
        ListHeaderComponent={CollectionDetailModelHeader}
        ItemSeparatorComponent={Seperator}
      />
    </View>
  );
};

export default CollectionPaidDetailsModel;
