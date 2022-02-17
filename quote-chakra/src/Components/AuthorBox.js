import {Center, SlideFade} from '@chakra-ui/react'
import { useDrag } from 'react-dnd'

const AuthorBox = ({children, gameDispatch}) => {
  const [{isDragging}, drag] = useDrag(() => ({
    type: "AuthorBox",
    item: {text: children},
    collect: (monitor) => ({
      isDragging: monitor.isDragging()

    }),
    end: (_, monitor) => {
      const dropResult = monitor.getDropResult()
      if(dropResult) {
        gameDispatch({type: 'AuthorChoice', choice: children})
      }
    },
  }))
  const visibility = isDragging ? "hidden" : "visible"
  return (
    <SlideFade in={true}>
      <Center  
        onDoubleClick={() => gameDispatch({type: 'AuthorChoice', choice: children})}
        ref={drag}
        visibility={visibility}
        data-testid="quoteBox"
        layerStyle={'authorBox'}>
      
     
        
        {children.toUpperCase()}
      </Center>
    </SlideFade>
  )
}

export default AuthorBox