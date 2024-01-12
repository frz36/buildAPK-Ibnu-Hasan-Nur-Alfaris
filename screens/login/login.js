import React, { Component, useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import{FormText, FormPassword, ButtonMain, TextLink} from '../../components/atomics/index'
function Login({navigation}){
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');

  // handleRegister = () => {
  //   this.props.navigation.navigate('Register');
  // }

  handleLogin = () => {
    // Implement your login logic here
  }


    return (
      <View style={styles.container}>
        <Image style={styles.imageprofile} source={require('../../assets/logo.png')} />

        <Text style={styles.title}>Wellcome to Apps!</Text>
        

        <View style={styles.formcontainer}>
        <View style={styles.form}>
        <Text style={styles.titleinput}>
        Email or Username
        </Text>
        <FormText title="Masukkan Email/Username"value={username} onChangeText={setUsername}/>
        </View>
        
        <View style={styles.formcontainer}>
        <Text style={styles.titleinput}>
        Password
        </Text>
        <FormPassword title="Masukkan Password" value={password} onChangeText={setPassword}/>
        </View>
        </View>

      <ButtonMain title="Masuk" onPress={()=>{navigation.navigate('porto')}} />
        <Image
        style={styles.imageseparator}
        source={require('../../assets/separator.png')}
        />
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleButtonText}>Google</Text>
        </TouchableOpacity>


        {/* Teks "belum punya akun? daftar" */}
        <TextLink title1="Gapunya akun?" title2="Register" onPress={()=>{navigation.navigate('register')}}/>

      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 0,
  },
  
  formcontainer: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 0,
    paddingHorizontal: 0,
  },

  title: {
    marginTop: 24,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#aiaiai',
    textAlign: 'center',
  },
  input: {
    height: 52,
    width: 350,
    marginTop: 12,
    borderRadius: 56,
    borderColor: '#D0D5DD',
    borderWidth: 1,
    backgroundColor: '#F2F4F7',
    padding: 16,
  },
  loginButton: {
    height: 48,
    width: 350,
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
    marginTop: 16,
    marginBottom: 76,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  googleButtonText: {
    color: 'black',
    fontSize: 16,
  },
  
  registerText: {
    fontFamily: 'SF-Pro',
    marginBottom: 20,
    marginLeft: 6,
    fontSize: 14,
    fontWeight: 'Medium',
    color: '#667085',
    textAlign: '0',
    alignSelf: 'center',
  },
  registerLink: {
    color: '#05C93C',
    fontSize: 14,
  },
  imageprofile: {
    marginTop: 16,
    height: 42,
    width: 42,
    alignSelf: 'center',
  },
  imagetab: {
    marginTop: 18,
    height: 45,
    width: 350,
    alignSelf: 'center',
  },
  titleinput: {
    fontFamily: 'SF-Pro',
    marginTop: 24,
    fontSize: 16,
    fontWeight: 'Medium',
    color: '#aiaiai',
  },
  legalContainer: {
    flex: 1,
    flexDirection:'row',
  },
  Imagecheckbox: {
    marginTop: 20,
    height: 16,
    width: 16,
  },
  legaltext: {
    fontFamily: 'SF-Pro',
    marginTop: 20,
    marginLeft: 6,
    fontSize: 12,
    fontWeight: 'Medium',
    color: '#667085',
  },
  buttonContainer: {
    alignSelf: 'stretch',
    borderRadius: 12,
  },
  imageseparator: {
    marginTop: 20,
    height: 20,
    width: 325,
  },
});

export default Login;
