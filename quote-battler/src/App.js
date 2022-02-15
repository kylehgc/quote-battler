import { ChakraProvider} from '@chakra-ui/react'
import BoxTest from './Components/BoxTest';

function App() {
  return (
    <ChakraProvider>
      <BoxTest />
    </ChakraProvider>
    
  );
}

export default App;
