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

export default function SignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const realm = useRealm();

  const signUp = () => {
    realm.write(() => {
      realm.create(User, {
        _id: Math.floor(Math.random() * 234),
        email: email,
        password: password
      })
    })

    setEmail("")
    setPassword("")
    navigation.navigate("login")
  }

 

  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <Header>
          <StyledText size="48px" weight="800">
            Sign up
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


        <Button
          backgroundColor="#00BD6B"
          colorText="#FFFFFF"
          onHandlePress={() => signUp()}>
          Sign up
        </Button>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
