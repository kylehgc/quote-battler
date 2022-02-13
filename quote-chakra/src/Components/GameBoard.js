import {Flex} from '@chakra-ui/react'
import QuoteBox from './QuoteBox'
import AuthorBox from './AuthorBox'
import { DndProvider } from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {TouchBackend} from 'react-dnd-touch-backend'
import Preview from './TouchPreview'

const GameBoard = () => {
  return (
   
    <Flex minHeight="100vh" 
      flexDirection={"column"}
      minWidth={"100vw"} 
      bg={"teal.300"}
      alignItems="center" justifyContent="center"
    >	
      <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
        <QuoteBox> I am a quote </QuoteBox>
        <AuthorBox> I am an author</AuthorBox>
        
        <Preview/>
      </DndProvider>
    </Flex>
    

  )
}

export default GameBoard