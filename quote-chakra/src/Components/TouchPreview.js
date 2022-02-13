import {usePreview} from 'react-dnd-preview'
import { Center } from '@chakra-ui/react'
const MyPreview = () => {
  const {display, itemType, item, style} = usePreview()
  if (!display) {
    return null;
  }
  return <Center 
    bg={"blue"} 
    width={"auto"} 
    minWidth={"25vw"}
    maxWidth={"75vw"}
    minHeight={"10vh"} 
    p={5} 
    height={"auto"}
    border="1px" 
    style={style}>
  I love previews
  </Center>  
}
 
export default MyPreview