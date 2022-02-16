import {usePreview} from 'react-dnd-preview'
import { Center } from '@chakra-ui/react'

const TouchPreview = ({boxStyles}) => {
  const {display, item, style} = usePreview()
  if (!display) {
    return null;
  }
  return <Center 
    opacity={0.8}
    layerStyle={'authorBox'}
    style={style}
  >
    {item.text.toUpperCase()}
  </Center>  
}
 
export default TouchPreview