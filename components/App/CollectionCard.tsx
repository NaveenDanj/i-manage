/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Colors from '../Colors';

FontAwesome6;
interface ICollectionProp {
  name: string;
  icon: React.JSX.Element;
  radius: number;
}

const CollectionCard = () => {
  const CollectionButton = ({name, icon, radius}: ICollectionProp) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: '#1F222A',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}>
        <View
          style={{
            padding: 18,
            borderRadius: radius,
            backgroundColor: '#35383F',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {icon}
        </View>

        <Text style={{color: '#3979FD', fontWeight: '500'}}>{name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 10,
      }}>
      <View
        style={{
          width: 320,
          backgroundColor: '#28A878',
          height: 260,
          borderRadius: 18,
          paddingHorizontal: 10,
          //   paddingVertical: 20,
          paddingBottom: 20,
          paddingTop: 10,
        }}>
        <Text
          style={{fontSize: 20, fontWeight: '600', color: Colors.dark.text}}>
          # Sample Collection
        </Text>

        <Text style={{fontSize: 15, marginTop: 20, color: Colors.dark.text}}>
          Your balance
        </Text>
        <Text
          style={{
            fontSize: 35,
            marginTop: 1,
            fontWeight: '700',
            color: Colors.dark.text,
          }}>
          $12,869
        </Text>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            backgroundColor: '#1F222A',
            padding: 10,
            borderRadius: 20,
          }}>
          <CollectionButton
            radius={30}
            icon={
              <MaterialCommunityIcons
                name="file-upload"
                size={16}
                color="#3979FD"
              />
            }
            name={'Request'}
          />
          <CollectionButton
            radius={60}
            icon={
              <FontAwesome6
                name="money-bill-transfer"
                size={12}
                color="#3979FD"
              />
            }
            name={'In & Out'}
          />
          <CollectionButton
            radius={30}
            name={'Payment'}
            icon={<MaterialIcons name="payments" size={16} color="#3979FD" />}
          />
        </View>
      </View>
    </View>
  );
};

export default CollectionCard;
