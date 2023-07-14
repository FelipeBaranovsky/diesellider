/* Launch Point */
import React, {useState} from 'react';
import {StyleSheet, Platform} from 'react-native';
import {Home as HomeWeb} from './src/pages/index.js';
import {Home as HomeMobile} from './src/screens/index.js';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Indexado from './src/screens/Indexado.js';
import Header from './src/components/header/Header.jsx';
import Querys from './src/pages/Querys.js';
import Contact from './src/pages/Contact.js';
import Products from './src/pages/Products.js';
import Services from './src/pages/Services.js';
import Order from './src/pages/Order.js';


const App = () => {
  const Stack = createNativeStackNavigator();
  const linking = {
    prefixes: ['https://localhost:8080'],
    config: {
      screens: {
        Home: '/',
        Profile: '/Indexado',
        Products: '/Products',
        Services: '/Services',
        Querys: '/Querys',
        Contact: '/Contact',
        Order: '/Order',
      }
    },
  };

  const home = Platform.OS === "web" ? HomeWeb : HomeMobile
  return (
    <>
    <NavigationContainer linking={linking} >
      {Platform.OS === 'web' && <Header />}
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Home"
          component={home}
        /> 
        <Stack.Screen name="Profile" component={Indexado} />
        <Stack.Screen
          name="Products"
          component={Products}
        /> 
        <Stack.Screen
          name="Services"
          component={Services}
        /> 
        <Stack.Screen
          name="Querys"
          component={Querys}
        /> 
        <Stack.Screen
          name="Contact"
          component={Contact}
        /> 
        <Stack.Screen
          name="Order"
          component={Order}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
    </> 
  );
};

export default App;