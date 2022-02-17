import {Flex, Center } from '@chakra-ui/react'
import QuoteBox from './QuoteBox'
import AuthorBox from './AuthorBox'
import { DndProvider } from 'react-dnd'
import {TouchBackend} from 'react-dnd-touch-backend'
import Preview from './TouchPreview'

const GameBoard = ({quote, realAuthor, fakeAuthor, gameDispatch}) => {
  
  return (   
    <Flex 
      flexDirection={"column"} 
      alignItems="center"  
      height={'100%'}
      
    >	
      <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
        <Flex my={{base: 15, lg: 20}}  justifyContent='center' height={'70%'} alignItems={'center'}>
          <QuoteBox >{quote}</QuoteBox>
        </Flex> 
        
        <Center height={'70%'} justifyContent='space-around' flexDirection={{base: 'column', lg: 'row'}}>
          <AuthorBox gameDispatch={gameDispatch}>{realAuthor}</AuthorBox>
          <AuthorBox gameDispatch={gameDispatch}>{fakeAuthor}</AuthorBox>
          <Preview />
        </Center>   
      </DndProvider>
    </Flex>
    

  )
}

export default GameBoard