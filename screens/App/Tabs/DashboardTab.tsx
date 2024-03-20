/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import CollectionCard from '../../../components/App/CollectionCard';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TransactionItem from '../../../components/App/TransactionItem';

export default function TabOneScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
      </ScrollView>

      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginHorizontal: 10,
          marginTop: 30,
          gap: 10,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            padding: 15,
            backgroundColor: '#1F222A',
            width: '50%',
            borderRadius: 10,
          }}>
          <TouchableOpacity
            style={{
              marginVertical: 'auto',
              backgroundColor: '#1F222A',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
            }}>
            <View
              style={{
                padding: 18,
                borderRadius: 30,
                backgroundColor: '#212C43',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesome name="arrow-up" size={16} color="#3C7BFE" />
            </View>
          </TouchableOpacity>

          <View
            style={{
              backgroundColor: '#1F222A',
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
              }}>
              $12,869
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginTop: 20,
                position: 'relative',
                top: -10,
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
            padding: 15,
            backgroundColor: '#1F222A',
            width: '50%',
            borderRadius: 10,
          }}>
          <TouchableOpacity
            style={{
              marginVertical: 'auto',
              backgroundColor: '#1F222A',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
            }}>
            <View
              style={{
                padding: 18,
                borderRadius: 30,
                backgroundColor: '#3A2A32',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesome name="arrow-down" size={16} color="#FF7175" />
            </View>
          </TouchableOpacity>

          <View
            style={{
              backgroundColor: '#1F222A',
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
              }}>
              $12,869
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginTop: 20,
                position: 'relative',
                top: -10,
              }}>
              Expence
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginTop: 30,
        }}>
        <Text style={{marginVertical: 'auto', fontWeight: '600', fontSize: 20}}>
          Transactions
        </Text>
        <Text
          style={{
            marginTop: 4,
            fontWeight: '600',
            fontSize: 13,
            color: '#246BFD',
          }}>
          See All
        </Text>
      </View>

      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginHorizontal: 10,
          marginTop: 30,
          gap: 10,
        }}>
        <TouchableOpacity
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#246BFD',
            width: '50%',
            borderRadius: 30,
          }}>
          <Text style={{fontSize: 15, fontWeight: '700', position: 'relative'}}>
            Income
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#246AFB',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#0000',
            width: '50%',
            borderRadius: 30,
          }}>
          <Text style={{fontSize: 15, fontWeight: '700', position: 'relative'}}>
            Expense
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginHorizontal: 10,
          marginVertical: 30,
          gap: 20,
        }}>
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
      </View>
    </ScrollView>
  );
}

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
