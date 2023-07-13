/* Launch Point */
import React, {useState} from 'react';
import {StyleSheet, Platform} from 'react-native';
import {Home as HomeWeb} from './src/pages/index.js';
import {Home as HomaMobile} from './src/screens/index.js';

const App = () => {
  return (
    <>
      {Platform.OS === 'web' && <HomeWeb />}
      {Platform.OS !== 'web' && <HomaMobile />}
    </>
    
  );
};

export default App;