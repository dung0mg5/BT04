import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, View, KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components/native';

import {useQuery, useRealm} from './RealmContext';
import {User} from './User';
import Input from './Input';
import Button from './Button';
import SliderSwitch from './SliderSwitch';

const StyledText = styled.Text`
  font-size: ${props => props.size || '15px'};
  font-weight: ${props => props.weight || 'normal'};
  color: ${props => props.color || '#000'};
`;

const Header = styled.View`
  margin: 30px 0 0 20px;
`;

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRememberMe, setIsRememberMe] = useState(false);

  const realm = useRealm();

  const toggleSwitch = () => {
    setIsRememberMe(previousState => !previousState);
  };

  const login = () => {
    if (isRememberMe) {
      realm.write(() => {
        realm.create(User, {
          accessToken: '123456',
        });
      });
    }
    setEmail('');
    setPassword('');
    setIsRememberMe(false);
    navigation.navigate('main');
  };

  const user = useQuery(User);
  useEffect(() => {
    if (user.length > 0) {
      navigation.navigate('main');
    }
  }, [user, navigation]);

  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <Header>
          <StyledText size="48px" weight="800">
            Sign in
          </StyledText>
          
        </Header>
        <Input
          height="64px"
          width="385px"
          placeholder="Email"
          placeholderTextColor="#666"
          data={email}
          setData={setEmail}
        />
        <Input
          height="64px"
          width="385px"
          placeholder="Password"
          placeholderTextColor="#666"
          type="password"
          data={password}
          setData={setPassword}
        />

        <View style={{marginBottom: 50}}>
          <SliderSwitch
            toggleSwitch={toggleSwitch}
            isEnabled={isRememberMe}
            content="Remember me"
          />
        </View>

        <Button
          backgroundColor="#2D64BC"
          colorText="#fff"
          onHandlePress={() => login()}>
          Sign in
        </Button>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
