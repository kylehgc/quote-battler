import {Center, Text, Fade} from '@chakra-ui/react'
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
    <Fade in={true}>
      <Center
        ref={drop}
        data-testid="quoteBox"
        mx={10}
        borderRadius={20}
        bg="tomato" 
        width={{base: '75vw', sm: '60vw', lg: '50vw'}} 
        minHeight="20vh"  
        height="auto"
        maxHeight="50vh"
        border="2px"
        borderColor={isOver ? 'blue' : 'black'}> 
        <Text cursor='default' p={{base:5, lg: 10}} fontSize={{base: '7vw', sm: '5vw', lg: '2.5vw'}}>"{children}"</Text>
      </Center>
    </Fade>
  )
}

export default QuoteBox