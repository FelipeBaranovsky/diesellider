import React from 'react'
import { Button, Platform, StyleSheet, Text, View } from 'react-native'
import { AppBar } from "@react-native-material/core";
import Header from '../header/Header'
const ProductList = ({children}) => {
  return (
    <View>
      <View>
      </View>
      <View>
        {children}
      </View>
      
    </View>
  )
}

export default ProductList