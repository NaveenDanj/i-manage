/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NotificationCard from '../../../components/App/NotificationCard';
import Colors from '../../../components/Colors';

const NotificationTab = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={{flexDirection: 'column', gap: 10, paddingBottom: 30}}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '700',
            marginVertical: 10,
            color: Colors.dark.text,
          }}>
          Today
        </Text>
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />

        <Text
          style={{
            fontSize: 17,
            fontWeight: '700',
            marginVertical: 10,
            color: Colors.dark.text,
          }}>
          Yesterday
        </Text>

        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />

        <Text
          style={{
            fontSize: 17,
            fontWeight: '700',
            marginVertical: 10,
            color: Colors.dark.text,
          }}>
          December 11, 2024
        </Text>

        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </View>
    </ScrollView>
  );
};

export default NotificationTab;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
