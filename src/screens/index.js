/* Mobile Home */
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
        <Text>HOLA!</Text>
    </View>
  )}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C3E8BD',
      paddingTop: 40,
      paddingHorizontal: 10,
    }
  });

export {Home};