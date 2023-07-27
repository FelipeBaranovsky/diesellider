import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import React from 'react'
import Login from '../../pages/Login'
import Header from '../header/Header'
import { Platform } from 'react-native'
import Products from '../../pages/products/Products'
import Querys from '../../pages/Querys'
import Services from '../../pages/Services'
import Contact from '../../pages/Contact'
import Order from '../../pages/Order'
import ProductNews from '../../pages/products/ProductNews'
import ProductOffers from '../../pages/products/ProductOffers'
import ProductPrices from '../../pages/products/ProductPrices'

const Routes = () => {
    const Stack = createNativeStackNavigator();
    // const linking = {
    //     prefixes: ['https://localhost:8080'],
    //     config: {
    //       screens: {
    //         Productos: '/',
    //         Servicios: '/Servicios',
    //         Consultas: '/Consultas',
    //         Contacto: '/Contacto',
    //         Pedido: '/Pedido',
    //       }
    //     },
    //   };

  return (
    <NavigationContainer>
        {Platform.OS === 'web' && <Header/>}
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName='Login'
        >
            <Stack.Screen name="Login" component={Login} options={{ title: 'Diesel Lider' }}/>
            <Stack.Group>

                <Stack.Screen name="Productos" component={Products} options={{ title: 'Diesel Lider' }}/>
                <Stack.Group>
                    <Stack.Screen name="Novedades" component={ProductNews} options={{ title: 'Diesel Lider - Novedades' }}/>
                    <Stack.Screen name="Ofertas" component={ProductOffers} options={{ title: 'Diesel Lider - Ofertas' }}/>
                    <Stack.Screen name="Precios" component={ProductPrices} options={{ title: 'Diesel Lider - Precios' }}/>
                </Stack.Group>
                <Stack.Screen name="Consultas" component={Querys} options={{ title: 'Diesel Lider - Consultas' }}/>
                <Stack.Screen name="Servicios" component={Services} options={{ title: 'Diesel Lider - Servicios' }}/>
                <Stack.Screen name="Contacto" component={Contact} options={{ title: 'Diesel Lider - Contacto' }}/>
                <Stack.Screen name="Pedido" component={Order} options={{ title: 'Diesel Lider - Pedido' }}/>
            </Stack.Group>
            
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes