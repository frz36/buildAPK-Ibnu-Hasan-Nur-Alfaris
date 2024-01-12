import { Text, View, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView, TextInput, Pressable } from 'react-native';
import react, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function FormPassword({ title, value, onChangeText }) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        autoCapitalize='none'
        value={value}
        placeholder={title}
        secureTextEntry={!showPassword ? true : false}
      />
      <TouchableOpacity onPress={toggleShowPassword} style={styles.icon} >
        <Icon
          name={showPassword ? 'eye' : 'eye-off'}
          size={24}
          color="#888"
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  )
}

export { FormPassword };


const styles = StyleSheet.create({
  formContainer: {
    marginTop: 16,
    justifyContent: 'center',
    flexDirection: 'coloumn',
  },
  input: {
    height: 52,
    width: 325,
    marginTop: 0,
    borderRadius: 56,
    borderColor: '#D0D5DD',
    borderWidth: 1,
    backgroundColor: '#F2F4F7',
    padding: 16,
  },
  icon: {
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingBottom: 25,
    paddingEnd: 15
  },
});