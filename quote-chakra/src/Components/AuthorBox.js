import {Center} from '@chakra-ui/react'


const AuthorBox = ({children}) => {

  return (
    <Center 
      data-testid="quoteBox"
      bg={"blue"} 
      width={"auto"} 
      minWidth={"25vw"}
      maxWidth={"75vw"}
      minHeight={"10vh"} 
      p={5} 
      height={"auto"}
      border="1px">
      {children}
    </Center>
  )
}

export default AuthorBox