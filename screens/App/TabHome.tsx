/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from '../../components/Colors';
import DashboardTab from './Tabs/DashboardTab';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconOcticons from 'react-native-vector-icons/Octicons';
import NotificationTab from './Tabs/NotificationTab';
import UserTab from './Tabs/UserTab';
import OrganizationTab from './Tabs/Organization';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OrganizationService from '../../services/Organization.Service';
import {setOrganization} from '../../store/OrganizationSlice';

const Tab = createBottomTabNavigator();

const TabHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      const org = await AsyncStorage.getItem('currentOrg');

      if (!org) {
        return;
      }

      const orgData = await OrganizationService.getOrganization(org);

      if (!orgData.org) {
        return;
      }

      dispatch(setOrganization(orgData.org));
    };

    loadData();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.dark.tint,
        headerShown: false,
      }}>
      <Tab.Screen
        options={{
          title: '',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => <Icon name="home" size={24} color="white" />,
        }}
        name="Home"
        component={DashboardTab}
      />

      <Tab.Screen
        options={{
          title: '',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => <Icon name="bell" size={20} color="white" />,
        }}
        name="Notifications"
        component={NotificationTab}
      />

      <Tab.Screen
        options={{
          title: '',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <IconAntDesign
              name="scan1"
              style={{marginTop: 10}}
              size={24}
              color="white"
            />
          ),
        }}
        name="ScanBill"
        component={DashboardTab}
      />

      <Tab.Screen
        options={{
          title: '',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => <Icon name="user" size={24} color="white" />,
        }}
        name="Users"
        component={UserTab}
      />

      <Tab.Screen
        options={{
          title: '',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => (
            <IconOcticons name="organization" size={24} color="white" />
          ),
        }}
        name="Organizations"
        component={OrganizationTab}
      />
    </Tab.Navigator>
  );
};

export default TabHome;
