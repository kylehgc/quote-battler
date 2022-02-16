import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Game from './Components/Game';
const theme = extendTheme({
  styles: {
    global: {
      
      body: {
        bg: 'teal',
      },
      // styles for the `a`
      
    },
  },
},
)

function App() {
 
  return (
    <ChakraProvider theme={theme}>
      
      <Game />
    
    </ChakraProvider>
  );
}

export default App;
