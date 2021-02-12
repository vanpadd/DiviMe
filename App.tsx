import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

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
      <View style={styles.contentStyle}>
        <View style={styles.rowStyle}>
          <TextInput
            style={styles.inputPercentageStyle}
            autoCorrect
            autoCapitalize="none"
            value={value}
            onChangeText={onChangeText}
            blurOnSubmit
            textAlign="center"
          />
          <FontAwesome5
            style={styles.searchStyle}
            name="percentage"
            size={24}
            color="black"
          />
          <View style={styles.spacerStyle} />
          <View style={styles.remainderStyle}></View>
        </View>
        <View style={styles.rowStyle}>
          <TextInput
            style={styles.inputPercentageStyle}
            autoCorrect
            autoCapitalize="none"
            value={value}
            onChangeText={onChangeText}
            blurOnSubmit
            textAlign="center"
          />
          <FontAwesome5
            style={styles.searchStyle}
            name="percentage"
            size={24}
            color="black"
          />
          <View style={styles.spacerStyle} />
          <View style={styles.remainderStyle}></View>
        </View>
        <View style={styles.rowStyle}>
          <TextInput
            style={styles.inputPercentageStyle}
            autoCorrect
            autoCapitalize="none"
            value={value}
            onChangeText={onChangeText}
            blurOnSubmit
            textAlign="center"
          />
          <FontAwesome5
            style={styles.searchStyle}
            name="percentage"
            size={24}
            color="black"
          />
          <View style={styles.spacerStyle} />
          <View style={styles.remainderStyle}></View>
        </View>
        <View style={styles.rowStyle}>
          <TextInput
            style={styles.inputPercentageStyle}
            autoCorrect
            autoCapitalize="none"
            value={value}
            onChangeText={onChangeText}
            blurOnSubmit
            textAlign="center"
          />
          <FontAwesome5
            style={styles.searchStyle}
            name="percentage"
            size={24}
            color="black"
          />
          <View style={styles.spacerStyle} />
          <View style={styles.remainderStyle}></View>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 200,
  },
  containerStyle: {
    marginTop: 100,
    margin: 15,
    flexDirection: 'row',
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
  },
  contentStyle: {
    marginTop: 50,
    flex: 1,
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },
  rowStyle: {
    margin: 15,
    height: 50,
    flexDirection: 'row',
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
  inputPercentageStyle: {
    borderRadius: 5,
    fontSize: 18,
    height: 50,
    borderWidth: 1,
    flex: 0.5,
  },
  spacerStyle: {
    height: 50,
    flex: 0.5,
  },
  remainderStyle: {
    borderBottomWidth: 1,
    height: 50,
    flex: 1,
  },
});
