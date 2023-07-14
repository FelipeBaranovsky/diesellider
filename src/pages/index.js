/* Web Home */
import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Header from '../components/header/Header.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from '@react-navigation/native';


const Home = () => {
  
  return (
    <View style={styles.container}>
      <Text>Chau!</Text>
      <Link to={{ screen: 'Profile'}}>
          Go to Indexado
      </Link>
    </View>
  )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3E8BD',
  }
});

export {Home};