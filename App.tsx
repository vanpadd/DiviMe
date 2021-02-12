import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const [value, onChangeText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerStyle}>
        <FontAwesome
          style={styles.searchStyle}
          name="dollar"
          size={24}
          color="grey"
        />
        <TextInput
          style={styles.inputStyle}
          autoCorrect
          autoCapitalize="none"
          placeholder="Gross income"
          value={value}
          onChangeText={onChangeText}
          blurOnSubmit
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerStyle: {
    margin: 15,
    flexDirection: 'row',
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
  },
  searchStyle: {
    marginHorizontal: 15,
    alignSelf: 'center',
  },
  inputStyle: {
    fontSize: 18,
    height: 50,
    backgroundColor: '#F0EEEE',
    flex: 1,
  },
});
