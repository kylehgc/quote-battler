import {Center} from '@chakra-ui/react'
import { useDrop } from 'react-dnd'


const QuoteBox = ({children}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "AuthorBox",
    drop: () => ({ name: 'AuthorBox'  }),
    collect: (monitor) => ({
      isOver: monitor.isOver()
    }),
  }))
  
  return (
    <Center
      ref={drop}
      data-testid="quoteBox"
      m={5}
      bg={"tomato"} 
      width={"auto"} 
      minWidth={"50vw"}
      maxWidth={'600px'}
      minHeight={"20vh"} 
      p={5} 
      height={"auto"}
      border="1px"> 
      {isOver ? 'Release to drop' : children}
    </Center>
  )
}

export default QuoteBox