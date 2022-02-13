import {Center} from '@chakra-ui/react'



const QuoteBox = ({children}) => {

  return (
    <Center 
      data-testid="quoteBox"
      m={5}
      bg={"tomato"} 
      width={"auto"} 
      minWidth={"50vw"}
      maxWidth={"75vw"}
      minHeight={"20vh"} 
      p={5} 
      height={"auto"}
      border="1px">
      {children}
    </Center>
  )
}

export default QuoteBox