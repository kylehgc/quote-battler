import {Center} from '@chakra-ui/react'
import { useDrag } from 'react-dnd'

const AuthorBox = ({children, boxStyles}) => {
  const [{isDragging}, drag] = useDrag(() => ({
    type: "AuthorBox",
    item: {text: children},
    collect: (monitor) => ({
      isDragging: monitor.isDragging()

    }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      dropResult ? console.log('hit') : console.log('miss')
    },
  }))
  const visibility = isDragging ? "hidden" : "visible"
  return (
    <Center  
      ref={drag}
      visibility={visibility}
      data-testid="quoteBox"
      {...boxStyles}>
      
     
    
      -{children}
    </Center>
  )
}

export default AuthorBox