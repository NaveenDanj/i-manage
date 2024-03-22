/* eslint-disable react/no-unstable-nested-components */
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
import PayModel from './models/PayModel';
import ViewRequestDetailsModel from './models/ViewRequestDetailsModel';
import ConfirmPaymentModel from './models/ConfirmPaymentModel';
import CollectionDetailsModel from './models/CollectionDetailsModel';
import CollectionPaidDetailsModel from './models/CollectionPaidDetailsModel';
import AddOrganization from './screens/App/AdditionalScreens/AddOrganization';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Login}
          options={{
            title: 'Welcome',
            headerShown: false,
            header: () => <NameCard />,
          }}
        />
        <Stack.Screen
          name="dashboard"
          options={{header: () => <NameCard />}}
          component={TabHome}
        />
        <Stack.Screen
          name="PayModel"
          options={{title: 'Payment Request'}}
          component={PayModel}
        />

        <Stack.Screen
          name="RequestDetails"
          options={{title: 'Payment Request Details'}}
          component={ViewRequestDetailsModel}
        />

        <Stack.Screen
          name="ConfrimPayment"
          options={{title: 'Confirm Payment'}}
          component={ConfirmPaymentModel}
        />

        <Stack.Screen
          name="CollectionDetails"
          options={{title: 'Collection Details'}}
          component={CollectionDetailsModel}
        />

        <Stack.Screen
          name="CollectionPaidDetails"
          options={{title: '2024-03 #3 Details'}}
          component={CollectionPaidDetailsModel}
        />

        <Stack.Screen
          name="AddOrganization"
          options={{title: 'Add new Organization'}}
          component={AddOrganization}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
