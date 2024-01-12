import { Text, View, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';

function ButtonMain({ onPress, title }) {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export { ButtonMain }

const styles = StyleSheet.create({
  buttonContainer: {
    height: 48,
    width: 325,
    marginTop: 20,
    marginBottom: 0,
    justifyContent: 'center',
    alignItems:'center',
    alignSelf: 'stretch',
    borderRadius: 12,
    backgroundColor: '#05C93C',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  }
});