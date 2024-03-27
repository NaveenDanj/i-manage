/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, TouchableOpacity, View, Text, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import LottieView from 'lottie-react-native';
import Colors from '../../components/Colors';
import AuthService from '../../services/Auth.service';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setUser} from '../../store/UserSlice';
import {User} from '../../types';

const handleLogin = async () => {
  try {
    const res = await AuthService.googleSignIn();
    console.log(res);
  } catch (err) {
    Alert.alert(
      'Authentication Faild',
      'Authentication failed due to following error. ' + err + '',
    );
  }
};

// @ts-ignore
const Login = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const checkSignInHandler = async () => {
      const res = await AuthService.isSignedIn();
      console.log('res', res);
      if (res) {
        const fetchCurrentUser = await AuthService.getCurrentUser();
        console.log(fetchCurrentUser);
        if (fetchCurrentUser.success && fetchCurrentUser.user) {
          const user: User = {
            email: fetchCurrentUser.user.user.email,
            given_name: fetchCurrentUser.user.user.givenName + '',
            family_name: fetchCurrentUser.user.user.familyName + '',
            name: fetchCurrentUser.user.user.name + '',
            picture: fetchCurrentUser.user.user.photo + '',
            phoneNumber: fetchCurrentUser.user.user.email,
            uid: fetchCurrentUser.user.user.id,
          };

          dispatch(setUser(user));
          // @ts-ignore
          navigation.replace('dashboard');
          setLoading(false);
          return;
        } else {
          // @ts-ignore-
          setLoading(false);
          return;
        }
      } else {
        // @ts-ignore
        setLoading(false);

        return;
      }
    };

    checkSignInHandler();
  }, [dispatch, navigation]);

  if (loading) {
    return (
      <View
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}>
        <Text style={{color: 'white'}}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, fontWeight: '800', color: Colors.dark.text}}>
        Let's get started
      </Text>

      <LottieView
        source={require('../../assets/lottie/Onboard.json')} // Replace with your animation file path
        autoPlay
        loop
        style={{width: 350, height: 350}}
      />

      <View
        style={{
          display: 'flex',
          gap: 20,
          width: '100%',
          paddingHorizontal: 30,
        }}>
        <TouchableOpacity
          // onPress={() => navigation.replace('dashboard')}
          onPress={handleLogin}
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            padding: 20,
            borderColor: 'rgba(255,255,255,0.2)',
            borderRadius: 16,
          }}>
          <Text style={{fontSize: 18, color: Colors.dark.text}}>
            Continue to Login
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'row',
            gap: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{fontSize: 15, fontWeight: '600', color: Colors.dark.text}}>
            Don't have an account?{' '}
          </Text>

          <TouchableOpacity>
            <Text style={{color: '#246BFD'}}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    backgroundColor: Colors.dark.background,
    color: Colors.dark.text,
  },
});
