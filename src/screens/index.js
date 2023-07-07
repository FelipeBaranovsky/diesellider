import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Header from '../components/header/Header.jsx';
import { Platform } from 'react-native';


const Home = () => {
  return (
    <View>
      {Platform.OS === 'web' && <Header />}    
    </View>
  );
};

export default Home;