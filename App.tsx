/* Launch Point */
import React, {useState} from 'react';
import Routes from './src/components/router/Routes.js';
import { HeaderProvider } from './src/hooks/HeaderContext';

const App = () => {
  // const home = Platform.OS === "web" ? HomeWeb : HomeMobile
  return (
    <>
      <HeaderProvider>
        <Routes/>
      </HeaderProvider>
    </> 
  );
};

export default App;