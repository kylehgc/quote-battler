import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Game from './Components/Game';


function App() {
  return (
    <ChakraProvider theme={theme}>
      
      <Game />
    
    </ChakraProvider>
  );
}

export default App;
