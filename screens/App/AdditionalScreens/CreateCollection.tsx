/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../../components/Colors';
import UserCard from '../../../components/App/UserCard';
import CreateCollectionPage1 from '../../../components/App/Collection/CreateCollectionPage1';
import CreateCollectionPage2 from '../../../components/App/Collection/CreateCollectionPage2';
import ListHeaderComponent from '../../../components/App/Collection/ListHeaderComponent';

const footerComponent = () => {
  return (
    <TouchableOpacity
      style={{
        marginTop: 45,
        marginBottom: 20,
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
        Save
      </Text>
    </TouchableOpacity>
  );
};

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
              ListFooterComponent={footerComponent}
              ListHeaderComponentStyle={{paddingBottom: 20}}
            />
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreateCollection;
