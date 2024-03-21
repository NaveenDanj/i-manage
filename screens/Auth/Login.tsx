/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import Colors from '../../components/Colors';

// @ts-ignore
const Login = ({navigation}) => {
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
          onPress={() => navigation.replace('dashboard')}
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
