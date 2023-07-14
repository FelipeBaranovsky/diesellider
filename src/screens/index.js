/* Mobile Home */
import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text>HOLA!</Text>
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigation.navigate('Profile', {name: 'Jane'})
          }
        />
    </View>
  )}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C3E8BD',
      paddingHorizontal: 10,
    }
  });

export {Home};