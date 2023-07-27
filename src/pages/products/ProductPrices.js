import React from 'react'
import { Button, Platform, StyleSheet, Text, View } from 'react-native'
import Header from '../../components/header/Header'
import ProductHeader from '../../components/product/ProductHeader'
import ProductList from '../../components/product/ProductList'

const ProductPrices = () => {
  return (
    <ProductList>
      <View style={styles.container}>
        <Text style={styles.title}>
            Lista de Precios
        </Text>
      </View>
    </ProductList>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#79ae92",
    flex:1,
  },
  title: {
    fontSize: 30,
  },
  header: {
    backgroundColor: "#5370c9",
    flexDirection: 'row',
    height: 40,
    padding: 10,
  }
});

export default ProductPrices