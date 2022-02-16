import {Flex, Center } from '@chakra-ui/react'
import QuoteBox from './QuoteBox'
import AuthorBox from './AuthorBox'
import { DndProvider } from 'react-dnd'
import {TouchBackend} from 'react-dnd-touch-backend'
import Preview from './TouchPreview'


const boxStyles = {
  m: 5,
  color:'whiteAlpha.700',
  cursor: 'default',
  bg: "blue",
  width: {base: '65vw', lg: '30vw'},
  fontSize: {base: '4vw', lg: '2.5vw', xl: '1.5vw'},  
  minHeight: "5vh",
  borderRadius: 15,
  fontWeight: 'bold',
  p: 5,
  height: "auto",
  border: "1px"
}

const GameBoard = ({quote, realAuthor, fakeAuthor, setQuoteChoice}) => {
  
  return (   
    <Flex 
      flexDirection={"column"} 
      alignItems="center"  
      height={'100%'}
      
    >	
      <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
        <Flex mb={{base: 15, lg: 20}} pt={20} height={'70%'} alignItems={'center'}>
          <QuoteBox >{quote}</QuoteBox>
        </Flex> 
        
        <Center height={'50%'} m={2} py='5%' flexDirection={{base: 'column', lg: 'row'}}>
          <AuthorBox setQuoteChoice={setQuoteChoice} boxStyles={boxStyles}>{realAuthor}</AuthorBox>
          <AuthorBox setQuoteChoice={setQuoteChoice} boxStyles={boxStyles}>{fakeAuthor}</AuthorBox>
          <Preview boxStyles={boxStyles}/>
        </Center>
        
      </DndProvider>
    </Flex>
    

  )
}

export default GameBoard