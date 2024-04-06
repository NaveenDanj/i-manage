/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {FlatList, KeyboardAvoidingView, Platform, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import UserCard from '../../../components/App/UserCard';
import CreateCollectionPage1 from '../../../components/App/Collection/CreateCollectionPage1';
import CreateCollectionPage2 from '../../../components/App/Collection/CreateCollectionPage2';
import ListHeaderComponent from '../../../components/App/Collection/ListHeaderComponent';
import ListFooterComponent from '../../../components/App/Collection/ListFooterComponent';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';
import OrganizationService from '../../../services/Organization.Service';
import {CreateCollectionDTO, UserDTO} from '../../../dto';

const Seperator = () => {
  return <View style={{padding: 10}} />;
};

const CreateCollection = () => {
  const [page, setPage] = useState(0);
  const [users, setUsers] = useState<UserDTO[]>([]);
  const [form, setForm] = useState<CreateCollectionDTO>({
    name: '',
    installmentAmount: 0,
    recurringType: '',
    users: [],
  });

  const currentOrg = useSelector(
    (state: RootState) => state.orgnaization.currentOrganization,
  );

  useEffect(() => {
    const fetchUsers = async () => {
      if (!currentOrg) {
        return;
      }

      const usersList = await OrganizationService.getOrganizationsUser(
        currentOrg.users,
      );
      console.log('list : ', usersList.users);
      setUsers(usersList.users);
    };

    fetchUsers();
  }, []);

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View style={{paddingHorizontal: 10, paddingBottom: 30}}>
        {page === 0 && (
          <CreateCollectionPage1
            form={form}
            setForm={setForm}
            handleNext={handleNext}
          />
        )}

        {page === 1 && <CreateCollectionPage2 handleNext={handleNext} />}

        {page === 2 && (
          <View>
            <FlatList
              data={users}
              renderItem={({item}) => (
                <UserCard key={item.user.email} user={item} />
              )}
              ItemSeparatorComponent={Seperator}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={ListHeaderComponent}
              ListFooterComponent={ListFooterComponent}
              ListHeaderComponentStyle={{paddingBottom: 20}}
            />
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreateCollection;
