/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../../components/Colors';
import Octicons from 'react-native-vector-icons/Octicons';
import UserCard from '../../../components/App/UserCard';

const Seperator = () => {
  return <View style={{padding: 10}} />;
};

const headerComponent = () => {
  return (
    <View style={{paddingBottom: 40}}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: 50,
        }}>
        <View
          style={{
            backgroundColor: '#27A878',
            padding: 25,
            borderRadius: 100,
          }}>
          <Octicons name="organization" size={30} color={'white'} />
        </View>
      </View>

      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '700',
            color: Colors.dark.text,
          }}>
          Create new Organization
        </Text>
        <Text
          style={{
            fontSize: 13,
            marginTop: 5,
            color: Colors.dark.text,
            textAlign: 'center',
          }}>
          Start by creating your organization to manage finances efficiently and
          collaborate seamlessly with your team.
        </Text>
      </View>

      <View
        style={{
          marginTop: 20,
          borderTopWidth: 1,
          borderColor: 'rgba(127,127,127 , 0.5)',
        }}
      />

      <Text style={{color: 'white', fontSize: 18, marginTop: 20}}>
        Select users for this organization
      </Text>

      <View
        style={{
          marginTop: 20,
          gap: 10,
          padding: 2,
          paddingHorizontal: 8,
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          backgroundColor: '#1F222A',
          borderRadius: 10,
        }}>
        <TextInput
          placeholderTextColor={'gray'}
          style={{flex: 1, color: 'white'}}
          placeholder="Search user by email"
        />
      </View>
    </View>
  );
};

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

const AddOrganizationDetails = () => {
  const [page, setPage] = useState(0); // Initialize page state to 0 for the form page

  const handleNext = () => {
    setPage(1); // Switch to page 1 (FlatList page) when "Next" button is pressed
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View style={{paddingHorizontal: 10, paddingBottom: 30}}>
        {page === 0 && (
          <View>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                marginTop: 50,
              }}>
              <View
                style={{
                  backgroundColor: '#27A878',
                  padding: 25,
                  borderRadius: 100,
                }}>
                <Octicons name="organization" size={30} color={'white'} />
              </View>
            </View>

            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                marginTop: 20,
              }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '700',
                  color: Colors.dark.text,
                }}>
                Create new Organization
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  marginTop: 5,
                  color: Colors.dark.text,
                  textAlign: 'center',
                }}>
                Start by creating your organization to manage finances
                efficiently and collaborate seamlessly with your team.
              </Text>
            </View>

            <View
              style={{
                marginTop: 20,
                borderTopWidth: 1,
                borderColor: 'rgba(127,127,127 , 0.5)',
              }}
            />

            <View style={{marginTop: 35}}>
              <View style={{display: 'flex', gap: 10}}>
                <Text style={{color: 'white', fontSize: 15}}>
                  Organization Name
                </Text>
                <View
                  style={{
                    gap: 10,
                    padding: 2,
                    paddingHorizontal: 8,
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                    backgroundColor: '#1F222A',
                    borderRadius: 10,
                  }}>
                  <TextInput
                    placeholderTextColor={'gray'}
                    style={{flex: 1, color: 'white'}}
                    placeholder="Enter the organization name"
                  />
                </View>
              </View>
            </View>

            <TouchableOpacity
              onPress={handleNext}
              style={{
                marginTop: 45,
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
        )}

        {page === 1 && (
          <View>
            <FlatList
              data={[1, 2, 3, 4, 5, 6, 7]}
              renderItem={UserCard}
              ItemSeparatorComponent={Seperator}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={headerComponent}
              ListFooterComponent={footerComponent}
            />
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddOrganizationDetails;
