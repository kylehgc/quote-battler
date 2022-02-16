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
        mb={10}
        mt={1}
        borderRadius={20}
        bg="tomato" 
        width={{base: '70vw', lg: '50vw'}} 
        minHeight="20vh"  
        height="auto"
        border="2px"
        borderColor={isOver ? 'blue' : 'black'}> 
        <Text py={5} px={5} fontSize={{base: '5vw', sm: '5vw', lg: '3vw'}}>"{children}"</Text>
      </Center>
    </Fade>
  )
}

export default QuoteBox