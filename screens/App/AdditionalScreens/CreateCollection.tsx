/* eslint-disable react-native/no-inline-styles */
import {FlatList, KeyboardAvoidingView, Platform, View} from 'react-native';
import React, {useState} from 'react';
import UserCard from '../../../components/App/UserCard';
import CreateCollectionPage1 from '../../../components/App/Collection/CreateCollectionPage1';
import CreateCollectionPage2 from '../../../components/App/Collection/CreateCollectionPage2';
import ListHeaderComponent from '../../../components/App/Collection/ListHeaderComponent';
import ListFooterComponent from '../../../components/App/Collection/ListFooterComponent';

const Seperator = () => {
  return <View style={{padding: 10}} />;
};

const CreateCollection = () => {
  const [page, setPage] = useState(0);

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View style={{paddingHorizontal: 10, paddingBottom: 30}}>
        {page === 0 && <CreateCollectionPage1 handleNext={handleNext} />}

        {page === 1 && <CreateCollectionPage2 handleNext={handleNext} />}

        {page === 2 && (
          <View>
            <FlatList
              data={[1, 2, 3, 4, 5, 6, 7]}
              renderItem={UserCard}
              ItemSeparatorComponent={Seperator}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={ListHeaderComponent}
              ListFooterComponent={ListFooterComponent}
              ListHeaderComponentStyle={{paddingBottom: 20}}
            />
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreateCollection;
