import React from 'react';
import { Switch, Text, View } from 'react-native';

const MySwitch = ({ toggleSwitch, isEnabled, content }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 2,
      }}>
      <Switch
        trackColor={{ false: '#767577', true: '#1233dhs' }}
        thumbColor="#f4f3f4"
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text
        style={{
          flex: 1,
          marginRight: 10,
          marginLeft: 10,
          fontSize: 16,
          fontWeight: 'bold',
          color: '#333',
        }}>
        {content}
      </Text>
    </View>
  );
};

export default MySwitch;
