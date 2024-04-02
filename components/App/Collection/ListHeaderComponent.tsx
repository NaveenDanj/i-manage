/* eslint-disable react-native/no-inline-styles */
import {Text} from 'react-native';
import React from 'react';
import PageHeader from './PageHeader';

const ListHeaderComponent = () => {
  return (
    <>
      <PageHeader />

      <Text style={{color: 'white', fontSize: 18, marginTop: 20}}>
        Select users for this collection
      </Text>
    </>
  );
};

export default ListHeaderComponent;
