import { Text, View, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView, TextInput, Pressable } from 'react-native';
import react, { useState } from 'react';

function TextLink({ onPress, title1, title2 }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>{title1}</Text>
      <TouchableOpacity
        onPress={onPress}>
        <Text style={styles.text2}>{title2}</Text>
      </TouchableOpacity>
    </View>
  )
}

export { TextLink }

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  text1: {
    fontSize: 13,
    paddingRight: 4,
  },
  text2: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#638CCE'
  }
})