import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Header from '../components/header/Header'

const Querys = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>
          Querys
        </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#79ae92",
    flex:1,
  }
});

export default Querys