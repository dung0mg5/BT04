import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, View, KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';

import {useQuery, useRealm} from './RealmContext';
import {User} from './User';
import Input from './Input';
import Button from './Button';
import SliderSwitch from './SliderSwitch';
import { Token } from './Token';

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
  //  realm.write(() => {
  //   realm.deleteAll()
  //  });
    setIsRememberMe(previousState => !previousState);
  };

  const login = () => {
   const user = realm.objects(User).filtered('email == $0', email)[0];
   if (user && user.password === password && password !== '') {
    if (isRememberMe) {
      realm.write(() => {
        realm.create(Token, {
          code: String(Math.random() * 10000 + 90000)
        })
      })

    
    }
    setEmail('')
    setPassword('')
    setIsRememberMe(false)
    navigation.navigate("main", {email})
   }
  };

  const token = useQuery(Token);
  useEffect(() => {
   if (token.length > 0) navigation.navigate("main", {email}) 
  }, [token, navigation])

 

  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <Header>
          <StyledText size="48px" weight="800">
            Sign in
          </StyledText>
          
        </Header>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("signup")}>
          <Text style={{
            marginLeft: 20,
            fontSize: 20,
            fontWeight: 800,
            color: 'grey'
          }}>Sign up</Text>
        </TouchableWithoutFeedback>
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
          backgroundColor="#00BD6B"
          colorText="#FFFFFF"
          onHandlePress={() => login()}>
          Sign in
        </Button>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
