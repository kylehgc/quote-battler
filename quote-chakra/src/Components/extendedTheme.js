import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  layerStyles: {
    scoreCircle: {
      bg:'white',
      color: '#8a4fff',
      height:'7vh', 
      width:'7vh',
      fontFamily:'montserrat', 
      fontSize: 30,
      p: 7  
    },
    quoteBox: {
      mx: 10,
      position:'relative',
      borderRadius: 20,
      width: {base: '75%', sm: '60vw', lg: '70vw'},
      minHeight:{base: '20vh', lg: '25vh'},  
      height:"auto",
      maxHeight:"50vh",
      fontSize:{base: '5vw', sm: '3.5vw', lg: '1.8vw'},
      fontFamily: 'Open Sans',
      color: '#8a4fff',
      bg: 'whiteAlpha.700'
    },
    authorBox: {
      m: 6,
      mx: {lg: 10},
      textAlign:  'center',
      color:'#8a4fff',
      cursor: 'default',
      bg: "white",
      fontFamily: 'montserrat',
      width: {base: '65vw', sm: '50vw', lg: '30vw'},
      fontSize: {base: '3vw', lg: '3.5vw', xl: '2vw'},  
      minHeight: {base: '10vh', lg: '25vh'},
      borderRadius: 25,
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