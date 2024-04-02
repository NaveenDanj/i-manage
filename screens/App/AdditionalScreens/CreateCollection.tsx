/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../../components/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import UserCard from '../../../components/App/UserCard';
import CreateCollectionPage1 from '../../../components/App/Collection/CreateCollectionPage1';
import PageHeader from '../../../components/App/Collection/PageHeader';

const PageHeaderList = () => {
  return (
    <>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: 50,
        }}>
        <View
          style={{
            backgroundColor: '#226AFA',
            padding: 25,
            borderRadius: 100,
          }}>
          <MaterialIcons
            name="collections-bookmark"
            size={30}
            color={'white'}
          />
        </View>
      </View>

      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '700',
            color: Colors.dark.text,
          }}>
          Create new Collection
        </Text>
        <Text
          style={{
            fontSize: 13,
            marginTop: 5,
            color: Colors.dark.text,
            textAlign: 'center',
          }}>
          Effortlessly manage your finances by creating collections, enabling
          efficient tracking and collaboration for expenses, incomes, and
          payments within your organization.
        </Text>
      </View>

      <View
        style={{
          marginTop: 20,
          borderTopWidth: 1,
          borderColor: 'rgba(127,127,127 , 0.5)',
        }}
      />

      <Text style={{color: 'white', fontSize: 18, marginTop: 20}}>
        Select users for this collection
      </Text>
    </>
  );
};

const footerComponent = () => {
  return (
    <TouchableOpacity
      style={{
        marginTop: 45,
        marginBottom: 20,
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
        Save
      </Text>
    </TouchableOpacity>
  );
};

const Seperator = () => {
  return <View style={{padding: 10}} />;
};

const CreateCollection = () => {
  const [page, setPage] = useState(0);

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View style={{paddingHorizontal: 10, paddingBottom: 30}}>
        {page === 0 && <CreateCollectionPage1 handleNext={handleNext} />}

        {page === 1 && (
          <View>
            <View>
              <PageHeader />

              <Text style={{color: 'white', fontSize: 18, marginTop: 35}}>
                Select recuring type
              </Text>

              <View
                style={{
                  gap: 10,
                  padding: 13,
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  backgroundColor: '#1F222A',
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 2,
                  borderColor: '#3677FD',
                  paddingVertical: 10,
                  marginTop: 25,
                }}>
                <View
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 120,
                      backgroundColor: '#35383F',
                      padding: 5,
                      borderRadius: 20,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        backgroundColor: '#3677FE',
                        width: 24,
                        height: 24,
                        borderRadius: 100,
                        padding: 5,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 5,
                      }}>
                      <MaterialIcons
                        name="attach-money"
                        color={'white'}
                        size={13}
                      />
                    </View>

                    <Text
                      style={{
                        color: 'white',
                        fontSize: 16,
                        marginLeft: 10,
                        fontWeight: '600',
                      }}>
                      LKR
                    </Text>
                  </View>

                  <Text
                    style={{fontSize: 18, color: 'white', fontWeight: '600'}}>
                    LKR 1250.00 / Week
                  </Text>
                </View>
              </View>

              <View
                style={{
                  gap: 10,
                  padding: 13,
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  backgroundColor: '#1F222A',
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 2,
                  borderColor: '#3677FD',
                  paddingVertical: 10,
                  marginTop: 25,
                }}>
                <View
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 120,
                      backgroundColor: '#35383F',
                      padding: 5,
                      borderRadius: 20,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        backgroundColor: '#3677FE',
                        width: 24,
                        height: 24,
                        borderRadius: 100,
                        padding: 5,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 5,
                      }}>
                      <MaterialIcons
                        name="attach-money"
                        color={'white'}
                        size={13}
                      />
                    </View>

                    <Text
                      style={{
                        color: 'white',
                        fontSize: 16,
                        marginLeft: 10,
                        fontWeight: '600',
                      }}>
                      LKR
                    </Text>
                  </View>

                  <Text
                    style={{fontSize: 18, color: 'white', fontWeight: '600'}}>
                    LKR 1250.00 / Month
                  </Text>
                </View>
              </View>

              <View
                style={{
                  gap: 10,
                  padding: 13,
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  backgroundColor: '#1F222A',
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 2,
                  borderColor: '#3677FD',
                  paddingVertical: 10,
                  marginTop: 25,
                }}>
                <View
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 120,
                      backgroundColor: '#35383F',
                      padding: 5,
                      borderRadius: 20,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        backgroundColor: '#3677FE',
                        width: 24,
                        height: 24,
                        borderRadius: 100,
                        padding: 5,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 5,
                      }}>
                      <MaterialIcons
                        name="attach-money"
                        color={'white'}
                        size={13}
                      />
                    </View>

                    <Text
                      style={{
                        color: 'white',
                        fontSize: 16,
                        marginLeft: 10,
                        fontWeight: '600',
                      }}>
                      LKR
                    </Text>
                  </View>

                  <Text
                    style={{fontSize: 18, color: 'white', fontWeight: '600'}}>
                    LKR 1250.00 / Day
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                onPress={handleNext}
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
                  Next
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {page === 2 && (
          <View>
            <FlatList
              data={[1, 2, 3, 4, 5, 6, 7]}
              renderItem={UserCard}
              ItemSeparatorComponent={Seperator}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={PageHeaderList}
              ListFooterComponent={footerComponent}
              ListHeaderComponentStyle={{paddingBottom: 20}}
            />
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreateCollection;
