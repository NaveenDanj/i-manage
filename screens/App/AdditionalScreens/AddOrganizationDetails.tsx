/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, KeyboardAvoidingView, Platform, View} from 'react-native';
import AddOrganizationSetp1 from '../../../components/App/Organization/AddOrganizationSetp1';
import SelectUserCard from '../../../components/App/Organization/SelectUserCard';
import SearchUserHeader from '../../../components/App/Organization/SearchUserHeader';
import {User} from '../../../types';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';
import SearchUserFooter from '../../../components/App/Organization/SearchUserFooter';

const Seperator = () => {
  return <View style={{padding: 10}} />;
};

const AddOrganizationDetails = () => {
  const [page, setPage] = useState(0);
  const [name, setName] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  const handleNext = () => {
    setPage(1);
  };

  const handelSetUsers = async (user: User) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === user.email) {
        return;
      }
    }

    if (currentUser?.email === user.email) {
      return;
    }

    const l = [...users, user];
    setUsers(l);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View style={{paddingHorizontal: 10, paddingBottom: 30}}>
        {page === 0 && (
          <AddOrganizationSetp1 handleNext={handleNext} setNameOrg={setName} />
        )}

        {page === 1 && (
          <View>
            <FlatList
              data={users}
              renderItem={item => (
                <SelectUserCard user={item.item} setUsers={handelSetUsers} />
              )}
              ItemSeparatorComponent={Seperator}
              showsVerticalScrollIndicator={false}
              // eslint-disable-next-line react/no-unstable-nested-components
              ListHeaderComponent={_item => (
                <SearchUserHeader handleSetUsers={handelSetUsers} />
              )}
              ListFooterComponent={
                <SearchUserFooter users={users} name={name} />
              }
            />
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddOrganizationDetails;
