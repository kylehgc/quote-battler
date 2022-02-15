import {Flex} from '@chakra-ui/react'
import QuoteBox from './QuoteBox'
import AuthorBox from './AuthorBox'
import { DndProvider } from 'react-dnd'
import {TouchBackend} from 'react-dnd-touch-backend'
import Preview from './TouchPreview'


const boxStyles = {
  m: 4,
  color:'whiteAlpha.700',
  bg: "blue",
  width: "40vw",
  fontSize: "3vw",  
  minHeight: "5vh",
  p: 5,
  height: "auto",
  border: "1px"
}

const GameBoard = ({quote, realAuthor, fakeAuthor}) => {
  
  return (   
    <Flex minHeight="100vh" 
      flexDirection={"column"}
      minWidth={"100vw"} 
      alignItems="center" justifyContent="center"
    >	
      <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
        <QuoteBox> {quote}</QuoteBox>
        <AuthorBox boxStyles={boxStyles}>{realAuthor}</AuthorBox>
        <AuthorBox boxStyles={boxStyles}>{fakeAuthor}</AuthorBox>
        <Preview boxStyles={boxStyles}/> 
      </DndProvider>
    </Flex>
    

  )
}

export default GameBoard