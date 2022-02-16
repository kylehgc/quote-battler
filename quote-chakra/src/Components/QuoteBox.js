import {Center, Text, Fade, Box, Flex, Icon} from '@chakra-ui/react'
import { useDrop } from 'react-dnd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
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
      <Flex
        ref={drop}
     
        
        layerStyle={'quoteBox'}
        borderColor={isOver ? 'blue' : 'black'}> 
        <Box color='white' p={2} position='absolute' top='-1' left='1' ><FontAwesomeIcon size='lg' icon={faQuoteLeft} /></Box>
        <Box color='white' p={2} position='absolute' bottom='0' right='2' ><FontAwesomeIcon size='lg' icon={faQuoteRight} /></Box>
        <Center textAlign='center' cursor='default' p={{base:7, lg: 10}} >{children}</Center>
        
      </Flex>
    </Fade>
  )
  /* <Center
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
        <Text cursor='default' p={{base:5, lg: 10}} fontSize={{base: '7vw', sm: '5vw', lg: '2.5vw'}}>❝{children}❞</Text>
      </Center> */}
    
  


export default QuoteBox