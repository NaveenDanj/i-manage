import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from '../../components/Colors';
import DashboardTab from './Tabs/DashboardTab';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconOcticons from 'react-native-vector-icons/Octicons';
import NotificationTab from './Tabs/NotificationTab';

const Tab = createBottomTabNavigator();

const TabHome = () => {
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
        component={DashboardTab}
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
        component={DashboardTab}
      />

      {/* <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({color}) => <TabBarIcon name="home" color={color} />,

          headerLeft: () => <NameCard />,
        }}
      />

      <Tabs.Screen
        name="Notification"
        options={{
          title: '',
          tabBarIcon: ({color}) => <TabBarIcon name="bell-o" color={color} />,
          headerLeft: () => <NameCard />,
        }}
      />

      <Tabs.Screen
        name="ScanBill"
        options={{
          title: '',
          tabBarIcon: ({color}) => (
            <AntDesign name="scan1" size={24} color="white" />
          ),
        }}
      />

      <Tabs.Screen
        name="User"
        options={{
          title: '',
          headerLeft: () => <NameCard />,
          tabBarIcon: ({color}) => <TabBarIcon name="user" color={color} />,
        }}
      />

      <Tabs.Screen
        name="Organization"
        options={{
          title: '',
          headerLeft: () => <NameCard />,
          headerRight: () => (
            <View
              style={{
                backgroundColor: '#121212',
                flexDirection: 'row',
                gap: 15,
              }}>
              <Link href="/modal" asChild>
                <Pressable>
                  {({pressed}) => (
                    <FontAwesome
                      name="plus"
                      size={16}
                      color={Colors[colorScheme ?? 'light'].text}
                      style={{marginRight: 15, opacity: pressed ? 0.5 : 1}}
                    />
                  )}
                </Pressable>
              </Link>
            </View>
          ),
          tabBarIcon: ({color}) => (
            <Octicons name="organization" size={24} color="white" />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default TabHome;
