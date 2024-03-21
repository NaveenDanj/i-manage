/* eslint-disable react-native/no-inline-styles */
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../components/Colors';

const ConfirmPaymentModel = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        paddingHorizontal: 10,
        paddingBottom: 100,
        paddingTop: 30,
      }}>
      <View style={{borderRadius: 15, backgroundColor: '#1F222A', padding: 15}}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 530,
            }}
            source={{
              uri: 'https://avatars.githubusercontent.com/u/48654030?v=4',
            }}
          />
        </View>

        <View
          style={{
            marginTop: 20,
            borderTopWidth: 1,
            borderColor: 'rgba(255,255,255,0.2)',
          }}
        />

        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            marginVertical: 20,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#D2D2D4'}}>Amount (LKR)</Text>
            <Text style={{color: Colors.dark.text}}>400.00</Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#D2D2D4'}}>Name</Text>
            <Text style={{color: Colors.dark.text}}>Naveen Hettiwaththa</Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#D2D2D4'}}>Collection</Text>
            <Text style={{color: Colors.dark.text}}>Kama Salli</Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#D2D2D4'}}>Request Date</Text>
            <Text style={{color: Colors.dark.text}}>
              Dec 24, 2024 | 09:41:21 AM
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#D2D2D4'}}>Request ID</Text>
            <Text style={{color: Colors.dark.text}}>732155a057b5</Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#D2D2D4'}}>Note</Text>
            <Text
              ellipsizeMode="tail"
              style={{maxWidth: 200, color: Colors.dark.text}}>
              Yes, after purchasing, you cannot claim this kit as your creation,
              but you have the license right to use this kit in
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#D2D2D4'}}>Status</Text>
            <View
              style={{
                backgroundColor: '#FACC15',
                borderRadius: 10,
                paddingVertical: 2,
                paddingHorizontal: 10,
              }}>
              <Text style={{color: Colors.dark.text, fontWeight: '600'}}>
                Pending
              </Text>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={{
          marginTop: 35,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          backgroundColor: '#35383F',
          width: '100%',
          borderRadius: 30,
        }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '700',
            position: 'relative',
            color: 'red',
          }}>
          Reject
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          marginTop: 25,
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
          Accept
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ConfirmPaymentModel;
