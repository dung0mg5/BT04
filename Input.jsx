import React from 'react';
import { View, TextInput } from 'react-native';

const Input = ({ height, width, placeholder, placeholderTextColor, data, setData, type, children }) => {
  const inputStyle = {
    marginTop: 'auto',
    marginBottom: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <View style={{ backgroundColor: '#f0f0f0', padding: 10, borderRadius: 8, margin: 10 }}>
      <View style={inputStyle}>
        <TextInput
          style={{
            flex: 1,
            height: height,
            width: width,
            padding: 10,
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 5,
            color: '#333',
          }}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor || '#888'}
          defaultValue={data}
          onChangeText={setData}
          secureTextEntry={type === 'password'}
        />
        {children ? children : null}
      </View>
    </View>
  );
};

export default Input;
