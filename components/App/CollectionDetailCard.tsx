/* eslint-disable react-native/no-inline-styles */

import {TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

MaterialIcons;

const CollectionDetailCard = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 5,
        marginTop: 30,
      }}>
      <View
        style={{
          width: '100%',
          backgroundColor: '#28A878',
          height: 320,
          borderRadius: 18,
          paddingHorizontal: 10,
          //   paddingVertical: 20,
          paddingBottom: 20,
          paddingTop: 10,
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{fontSize: 20, fontWeight: '600', color: Colors.dark.text}}>
            # Sample Collection
          </Text>
        </View>

        <Text style={{fontSize: 15, marginTop: 20, color: Colors.dark.text}}>
          Collection balance
        </Text>

        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
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
              gap: 10,
              padding: 5,
              width: '45%',
              borderRadius: 10,
            }}>
            <TouchableOpacity
              style={{
                marginVertical: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
              }}>
              <View
                style={{
                  padding: 18,
                  borderRadius: 30,
                  backgroundColor: '#226BFD',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialIcons name="attach-money" size={14} color="white" />
              </View>
            </TouchableOpacity>

            <View
              style={{
                marginVertical: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '700',
                  position: 'relative',
                  top: 10,
                  color: Colors.dark.text,
                }}>
                $12,869
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  marginTop: 20,
                  position: 'relative',
                  top: -10,
                  color: Colors.dark.text,
                }}>
                Payment
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 10,
              padding: 5,
              width: '45%',
              borderRadius: 10,
            }}>
            <TouchableOpacity
              style={{
                marginVertical: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
              }}>
              <View
                style={{
                  padding: 18,
                  borderRadius: 30,
                  backgroundColor: '#226BFD',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <FontAwesome name="arrow-up" size={16} color="white" />
              </View>
            </TouchableOpacity>

            <View
              style={{
                marginVertical: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '700',
                  position: 'relative',
                  top: 10,
                  color: Colors.dark.text,
                }}>
                $12,869
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  marginTop: 20,
                  position: 'relative',
                  top: -10,
                  color: Colors.dark.text,
                }}>
                Income
              </Text>
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 10,
              padding: 5,
              width: '45%',
              borderRadius: 10,
            }}>
            <TouchableOpacity
              style={{
                marginVertical: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
              }}>
              <View
                style={{
                  padding: 18,
                  borderRadius: 30,
                  backgroundColor: '#226BFD',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <FontAwesome name="arrow-down" size={16} color="white" />
              </View>
            </TouchableOpacity>

            <View
              style={{
                marginVertical: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '700',
                  position: 'relative',
                  top: 10,
                  color: Colors.dark.text,
                }}>
                $12,869
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  marginTop: 20,
                  position: 'relative',
                  top: -10,
                  color: Colors.dark.text,
                }}>
                Expense
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 10,
              padding: 5,
              width: '45%',
              borderRadius: 10,
            }}>
            <TouchableOpacity
              style={{
                marginVertical: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
              }}>
              <View
                style={{
                  padding: 18,
                  borderRadius: 30,
                  backgroundColor: '#226BFD',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <FontAwesome5 name="user-minus" size={12} color="white" />
              </View>
            </TouchableOpacity>

            <View
              style={{
                marginVertical: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '700',
                  position: 'relative',
                  top: 10,
                  color: Colors.dark.text,
                }}>
                $12,869
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  marginTop: 20,
                  position: 'relative',
                  top: -10,
                  color: Colors.dark.text,
                }}>
                Debters
              </Text>
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 10,
              padding: 5,
              width: '45%',
              borderRadius: 10,
            }}>
            <TouchableOpacity
              style={{
                marginVertical: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
              }}>
              <View
                style={{
                  padding: 18,
                  borderRadius: 30,
                  backgroundColor: '#226BFD',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <FontAwesome name="money" size={12} color="white" />
              </View>
            </TouchableOpacity>

            <View
              style={{
                marginVertical: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '700',
                  position: 'relative',
                  top: 10,
                  color: Colors.dark.text,
                }}>
                $400 / Day
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  marginTop: 20,
                  position: 'relative',
                  top: -10,
                  color: Colors.dark.text,
                }}>
                Expense Rate
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CollectionDetailCard;
