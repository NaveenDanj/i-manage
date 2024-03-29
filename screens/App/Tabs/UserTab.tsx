/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../../../components/Colors';
import AuthService from '../../../services/Auth.service';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';

const UserTab = () => {
  const navigation = useNavigation();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  const handleLogout = async () => {
    await AuthService.signOut();
    // @ts-ignore
    navigation.replace('Home');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, paddingHorizontal: 10, paddingBottom: 30}}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: 20,
          }}>
          <Text
            style={{fontSize: 24, fontWeight: '700', color: Colors.dark.text}}>
            Your Profile
          </Text>
          <Text style={{fontSize: 15, marginTop: 10, color: Colors.dark.text}}>
            Don't worry. You can always change it later.
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: 30,
          }}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 75,
            }}
            source={{
              uri: currentUser?.picture,
            }}
          />
        </View>

        <View
          style={{
            display: 'flex',
            gap: 25,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: 40,
          }}>
          <View
            style={{
              gap: 10,
              padding: 5,
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              backgroundColor: '#1F222A',
              borderRadius: 10,
            }}>
            <TextInput
              readOnly={true}
              value={currentUser?.name}
              placeholderTextColor={'gray'}
              style={{flex: 1, color: 'white'}}
              placeholder="Your Full name"
            />
          </View>

          {/* Repeat the above TextInput block for each input */}

          <View
            style={{
              gap: 10,
              padding: 5,
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              backgroundColor: '#1F222A',
              borderRadius: 10,
            }}>
            <TextInput
              readOnly={true}
              value={currentUser?.email}
              placeholderTextColor={'gray'}
              style={{flex: 1, color: 'white'}}
              placeholder="Email"
            />
            <Entypo
              style={{marginTop: 18, marginRight: 10}}
              name="email"
              size={12}
              color="gray"
            />
          </View>

          <View
            style={{
              gap: 10,
              padding: 5,
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              backgroundColor: '#1F222A',
              borderRadius: 10,
            }}>
            <TextInput
              readOnly={true}
              value={currentUser?.uid}
              placeholderTextColor={'gray'}
              style={{flex: 1, color: 'white'}}
              placeholder="Your i-Manage user ID"
            />
          </View>

          <TouchableOpacity
            onPress={handleLogout}
            style={{
              marginTop: 5,
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
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UserTab;
