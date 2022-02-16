import {Center, SlideFade} from '@chakra-ui/react'
import { useDrag } from 'react-dnd'

const AuthorBox = ({children, boxStyles, setQuoteChoice}) => {
  const [{isDragging}, drag] = useDrag(() => ({
    type: "AuthorBox",
    item: {text: children},
    collect: (monitor) => ({
      isDragging: monitor.isDragging()

    }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if(dropResult) {
        setQuoteChoice(children)
      }
    },
  }))
  const visibility = isDragging ? "hidden" : "visible"
  return (
    <SlideFade in={true}>
      <Center  
        ref={drag}
        visibility={visibility}
        data-testid="quoteBox"
        {...boxStyles}>
      
     
    
      -{children}
      </Center>
    </SlideFade>
  )
}

export default AuthorBox