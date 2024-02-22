import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { useRealm } from './RealmContext';
import { Token } from './Token';

function Main({navigation, route}) {
  const realm = useRealm();
  const {email} = route.params;

  const logout = () => {
    const token = realm.objects(Token)[0]
    if (token) {
      realm.write(() => {
        realm.delete(token)
      })
    }
   
    navigation.navigate("login")
  }
  return (
    <View
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 100,
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Welcome to Main
      </Text>
      <TouchableOpacity onPress={() => logout()}>
        <Text
          style={{
            marginTop: 20,
            textAlign: 'center',
          }}>
          Logout
        </Text>
      </TouchableOpacity>
      {/* replace current screen with login */}
    </View>
  );
}

export default Main;
