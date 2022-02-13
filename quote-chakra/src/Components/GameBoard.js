import {Flex} from '@chakra-ui/react'
import QuoteBox from './QuoteBox'
import AuthorBox from './AuthorBox'

const GameBoard = () => {
  return (
    <Flex minHeight="100vh" 
      flexDirection={"column"}
      minWidth={"100vw"} 
      bg={"teal.300"}
      alignItems="center" justifyContent="center"
    >
      <QuoteBox> I am a quote </QuoteBox>
      <AuthorBox> I am an author</AuthorBox>
    </Flex>
  )
}

export default GameBoard