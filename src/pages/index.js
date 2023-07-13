/* Web Home */
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/header/Header.jsx';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <Text>Chau!</Text>
    </View>
  )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3E8BD',
  }
});

export {Home};