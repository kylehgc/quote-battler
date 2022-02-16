import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  layerStyles: {
    quoteBox: {
      mx: 10,
      position:'relative',
      borderRadius: 20,
      width: {base: '75vw', sm: '60vw', lg: '50vw'},
      minHeight:"20vh",  
      height:"auto",
      maxHeight:"50vh",
      fontSize:{base: '6vw', sm: '4vw', lg: '1.5vw'},
      fontFamily: 'Open Sans',
      color: '#8a4fff',
      bg: 'gray.300'
    },
    authorBox: {
      m: 5,
      color:'#8a4fff',
      cursor: 'default',
      bg: "white",
      fontFamily: 'montserrat',
      width: {base: '65vw', lg: '30vw'},
      fontSize: {base: '4vw', lg: '2.5vw', xl: '1.5vw'},  
      minHeight: "5vh",
      borderRadius: 15,
      fontWeight: 'bold',
      p: 5,
      height: "auto"
    }
  },
  styles: {

    global: {
      
      body: {
        bg: '#8a4fff',
      },
      // styles for the `a`
      
    }
  
  }
})


export default theme