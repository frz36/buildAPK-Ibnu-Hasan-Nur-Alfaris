import React, { Component, useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function FormText({title,onChangeText,value}){
  return (
            <TextInput
          style={styles.input}
          placeholder={title}
          onChangeText={onChangeText}
          value={value}
        />
  )
}

export {FormText}

const styles = StyleSheet.create({
    input: {
    height: 52,
    width: 325,
    marginTop: 12,
    borderRadius: 56,
    borderColor: '#D0D5DD',
    borderWidth: 1,
    backgroundColor: '#F2F4F7',
    padding: 16,
  },
})