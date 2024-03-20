/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from './screens/Auth/Login';
import TabHome from './screens/App/TabHome';
import {DarkTheme} from '@react-navigation/native';
import NameCard from './components/App/NameCard';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator screenOptions={{header: () => <NameCard />}}>
        <Stack.Screen
          name="Home"
          component={Login}
          options={{title: 'Welcome', headerShown: false}}
        />
        <Stack.Screen name="dashboard" component={TabHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
