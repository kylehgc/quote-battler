import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Game from './Components/Game';
import '@fontsource/open-sans/700.css'
import '@fontsource/montserrat/700.css'
import theme from './Components/extendedTheme'

function App() {
 
  return (
    <ChakraProvider theme={theme}>
      
      <Game />
    
    </ChakraProvider>
  );
}

export default App;
