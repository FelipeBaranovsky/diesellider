/* Header Component */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from '@react-navigation/native';


const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {/* Coloca tu logotipo aquí */}
        <Link to={{ screen: 'Home'}}>
          <Text style={styles.logo}>Logo</Text>
        </Link>
        
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.button}>
          <Link to={{ screen: 'Products'}}>
              <Text style={styles.buttonText}>Productos</Text>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Link to={{ screen: 'Querys'}}>
                <Text style={styles.buttonText}>Consultas</Text>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Link to={{ screen: 'Services'}}>
              <Text style={styles.buttonText}>Servicios</Text>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Link to={{ screen: 'Contact'}}>
              <Text style={styles.buttonText}>Contacto</Text>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Link to={{ screen: 'Order'}}>
              <Text style={styles.buttonText}>Pedido</Text>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Usuario</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 64,
    backgroundColor: '#EFEFEF',
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#DDDDDD',
    marginLeft: 8,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
});

export default Header;
