/* eslint-disable react-native/no-inline-styles */
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../components/Colors';
import CollectionDetailCard from '../components/App/CollectionDetailCard';
import Octicons from 'react-native-vector-icons/Octicons';
import UserContribution from '../components/App/UserContribution';

Octicons;

const CollectionDetailsModel = () => {
  return (
    <ScrollView
      style={{
        paddingHorizontal: 10,
        paddingVertical: 10,
        paddingBottom: 150,
        flex: 1,
        display: 'flex',
      }}
      showsVerticalScrollIndicator={false}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            marginTop: 15,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            backgroundColor: '#246BFD',
            width: '45%',
            borderRadius: 30,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '700',
              position: 'relative',
              color: Colors.dark.text,
            }}>
            Details
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginTop: 15,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            backgroundColor: '#000000',
            width: '45%',
            borderRadius: 30,
            borderWidth: 2,
            borderColor: '#226BFD',
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '700',
              position: 'relative',
              color: Colors.dark.text,
            }}>
            Requests
          </Text>
        </TouchableOpacity>
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
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
          alignItems: 'center',
        }}>
        <Text
          style={{fontSize: 16, fontWeight: '700', color: Colors.dark.text}}>
          Balance
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: Colors.dark.text,
            alignItems: 'center',
          }}>
          $12,689
        </Text>
      </View>

      <View>
        <CollectionDetailCard />
      </View>

      <View
        style={{
          marginTop: 30,
          borderTopWidth: 1,
          borderColor: 'rgba(255,255,255,0.2)',
        }}
      />

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
          alignItems: 'center',
        }}>
        <Text
          style={{fontSize: 16, fontWeight: '700', color: Colors.dark.text}}>
          Collection Overview Details
        </Text>
      </View>

      <View
        style={{
          marginTop: 30,
          borderRadius: 15,
          backgroundColor: '#1F222A',
          padding: 15,
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#30D475',
              width: 50,
              height: 50,
              borderRadius: 30,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Octicons name="organization" size={15} color="white" />
          </View>
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
            <Text style={{color: '#D2D2D4'}}>Collection Name</Text>
            <Text style={{color: Colors.dark.text}}>Kama Salli</Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#D2D2D4'}}>Total Amount</Text>
            <Text style={{color: Colors.dark.text}}>LKR 8000.00</Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#D2D2D4'}}>Total Expense</Text>
            <Text style={{color: Colors.dark.text}}>LKR 1200.00</Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#D2D2D4'}}>Total Users</Text>
            <Text style={{color: Colors.dark.text}}>12 Users</Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#D2D2D4'}}>Collection Type</Text>
            <Text style={{color: Colors.dark.text}}>Weekly | Expendable</Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#D2D2D4'}}>Installments</Text>
            <Text
              ellipsizeMode="tail"
              style={{maxWidth: 200, color: Colors.dark.text}}>
              LKR 1200.00 / Week
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
                backgroundColor: 'red',
                borderRadius: 10,
                paddingVertical: 2,
                paddingHorizontal: 10,
              }}>
              <Text style={{color: Colors.dark.text, fontWeight: '600'}}>
                Paused
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          marginTop: 30,
          borderTopWidth: 1,
          borderColor: 'rgba(255,255,255,0.2)',
        }}
      />

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
          alignItems: 'center',
        }}>
        <Text
          style={{fontSize: 16, fontWeight: '700', color: Colors.dark.text}}>
          User Contribution
        </Text>
      </View>

      <UserContribution />
      <UserContribution />

      <View style={{padding: 20}} />
    </ScrollView>
  );
};

export default CollectionDetailsModel;
