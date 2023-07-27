import { Text } from '@react-native-material/core';
import React from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'
import { Link } from '@react-navigation/native';


const ProductHeader = ({active}) => {
  return (
    <View style={[styles.container]}>
        <Link to={{ screen: 'Productos'}} style={[styles.button, {backgroundColor: active === "Products" ? "#b0b1b5" : "#cfd0d4"}]}>
              <Text style={styles.buttonText}>Catalogo</Text>
        </Link>
        <Link to={{ screen: 'Novedades'}} style={[styles.button, {backgroundColor: active === "News" ? "#b0b1b5" : "#cfd0d4"}]}>
              <Text style={styles.buttonText}>Novedades</Text>
        </Link>
        <Link to={{ screen: 'Ofertas'}} style={[styles.button, {backgroundColor: active === "Offers" ? "#b0b1b5" : "#cfd0d4"}]}>
              <Text style={styles.buttonText}>Ofertas</Text>
        </Link>
        <Link to={{ screen: 'Precios'}} style={[styles.button, {backgroundColor: active === "Prices" ? "#b0b1b5" : "#cfd0d4"}]}>
              <Text style={styles.buttonText}>Lista de Precios</Text>
        </Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      height: 20,
      backgroundColor: '#5370c9',
    },
    button: {
      paddingHorizontal: 12,
      paddingVertical: 5,
      marginLeft: 8,
      borderRadius: 4,
      backgroundColor: "red",
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: 'Roboto',
    },
  });

export default ProductHeader