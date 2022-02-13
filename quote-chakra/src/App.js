import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import GameBoard from './Components/GameBoard';


function App() {
  return (
    <ChakraProvider theme={theme}>
      
      <GameBoard/>
    
    </ChakraProvider>
  );
}

export default App;
