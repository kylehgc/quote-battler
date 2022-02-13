import {Center} from '@chakra-ui/react'
import { useDrag } from 'react-dnd'

const AuthorBox = ({children}) => {
  const [_, drag] = useDrag(() => ({
    type: "AuthorBox",
    item: { name: "AuthorBox" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
    },
  }))
  return (
    <Center 
      ref={drag}
      data-testid="quoteBox"
      bg={"blue"} 
      width={"auto"} 
      minWidth={"25vw"}
      maxWidth={"75vw"}
      minHeight={"10vh"} 
      p={5} 
      height={"auto"}
      border="1px">
      {children}
    </Center>
  )
}

export default AuthorBox