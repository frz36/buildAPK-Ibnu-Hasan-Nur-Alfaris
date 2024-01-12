import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {useNavigation}from '@react-navigation/native'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      namelengkap: '',
      nomerhandphone: '',
      password: '',
      konfirmasipassword: '',
    };
  }

  handleLogin = () => {
    this.props.navigation.navigate('login');
  }

  handleporto = ()=> {
    this.props.navigation.navigate('portofolio')
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: 'white' }]}>
      
        <Text style={styles.title}>Register</Text>

        <Text style={styles.titleinput}>
        Full Name
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter full name"
          placeholderTextColor={this.state.username ? 'black' : '#C6C6C6'}
        />
        <Text style={styles.titleinput}>
        Phone Number
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter phone number"
          placeholderTextColor={this.state.username ? 'black' : '#C6C6C6'}
        />
        <Text style={styles.titleinput}>
        Create Password
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={this.state.username ? 'black' : '#C6C6C6'}
          secureTextEntry={true}
        />
        <Text style={styles.titleinput}>
        Confirm Password
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Konfirmasi Password"
          placeholderTextColor={this.state.username ? 'black' : '#C6C6C6'}
          secureTextEntry={true}

        />
        <TouchableOpacity style={[styles.registerButton, { marginTop: 20 }]} onPress={this.handleporto}>
          <Text style={styles.registerButtonText}>Daftar</Text>
        </TouchableOpacity>
        
        <Image
        style={styles.imageseparator}
        source={require('../../assets/separator.png')}
        />
       
        <TouchableOpacity style={[styles.googleButton, { marginTop: 15 }]} onPress={this.handleLogin}>
          <Text style={styles.googleButtonText}>Google</Text>
        </TouchableOpacity>

        <Text style={[styles.loginText, { marginTop: 15 }]}>Have an account <Text style={styles.loginLink} onPress={this.handleLogin}>Login</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 0,
    paddingHorizontal: 20,
  },
  title: {
    marginTop: 24,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  titleinput: {
    marginTop: 24,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'left',
  },
  input: {
    height: 52,
    width: 325,
    marginTop: 12,
    borderRadius: 56,
    borderColor: '#D0D5DD',
    borderWidth: 1,
    backgroundColor: '#F2F4F7',
    padding: 12,
  },
  registerButton: {
    height: 48,
    width: 325,
    marginTop: 0,
    marginBottom: 0,
    justifyContent: 'center',
    alignItems:'center',
    alignSelf: 'stretch',
    borderRadius: 12,
    backgroundColor: '#05C93C',
  },
  googleButton: {
    width: '100%',
    height: 40,
    borderColor: '#C6C6C6',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButtonText: {
    color: 'white',
    fontSize: 16,
  },
  googleButtonText: {
    color: 'black',
    fontSize: 16,
  },
  orText: {
    color: '#D9D9D9',
    fontSize: 16,
  },
  loginText: {
    marginBottom: 20,
    marginLeft: 6,
    fontSize: 14,
    color: '#667085',
    textAlign: 'left',
    alignSelf: 'center',

  },
  loginLink: {
    color: '#05C93C',
    alignItems: 'center',
    fontSize: 14,
  },
  imageseparator: {
    marginTop: 20,
    height: 20,
    width: 325,
    alignSelf: '0',
  },
});

export default Register;
