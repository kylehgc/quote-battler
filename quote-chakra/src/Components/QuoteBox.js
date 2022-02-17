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
        <Box color='white' p={2.5} position='absolute' top='-1' left='1' ><FontAwesomeIcon size='xl' icon={faQuoteLeft} /></Box>
        <Box color='white' p={2.5} position='absolute' bottom='0' right='2' ><FontAwesomeIcon size='xl' icon={faQuoteRight} /></Box>
        <Center textAlign='center' cursor='default' p={{base:7, lg: 10}} >{children}</Center>
        
      </Flex>
    </Fade>
  )}


export default QuoteBox