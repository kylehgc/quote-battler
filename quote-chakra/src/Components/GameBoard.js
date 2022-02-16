import {Flex, Center } from '@chakra-ui/react'
import QuoteBox from './QuoteBox'
import AuthorBox from './AuthorBox'
import { DndProvider } from 'react-dnd'
import {TouchBackend} from 'react-dnd-touch-backend'
import Preview from './TouchPreview'


const boxStyles = {
  m: 5,
  color:'whiteAlpha.700',
  bg: "blue",
  width: {base: '65vw', lg: '30vw'},
  fontSize: {base: '4vw', lg: '3vw', xl: '2vw'},  
  minHeight: "5vh",
  p: 5,
  height: "auto",
  border: "1px"
}

const GameBoard = ({quote, realAuthor, fakeAuthor, setQuoteChoice}) => {
  
  return (   
    <Flex 
      flexDirection={"column"} 
      alignItems="center"  
      height={'70vh'}
    >	
      <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
        <Center  height={'60%'}>
          <QuoteBox >{quote}</QuoteBox>
        </Center> 
        
        <Center height={'40%'} m={2} pb='5%' flexDirection={{base: 'column', lg: 'row'}}>
          <AuthorBox setQuoteChoice={setQuoteChoice} boxStyles={boxStyles}>{realAuthor}</AuthorBox>
          <AuthorBox setQuoteChoice={setQuoteChoice} boxStyles={boxStyles}>{fakeAuthor}</AuthorBox>
          <Preview boxStyles={boxStyles}/>
        </Center>
        
      </DndProvider>
    </Flex>
    

  )
}

export default GameBoard