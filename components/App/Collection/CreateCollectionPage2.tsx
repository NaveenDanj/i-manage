/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import PageHeader from './PageHeader';
import Colors from '../../Colors';
import RecureTypeCard from './RecureTypeCard';

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

        <RecureTypeCard selected={false} />
        <RecureTypeCard selected={true} />
        <RecureTypeCard selected={false} />

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
