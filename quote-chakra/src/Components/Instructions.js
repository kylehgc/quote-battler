import { DndProvider} from "react-dnd"
import { TouchBackend } from "react-dnd-touch-backend"
import {Flex,Center, useBreakpoint} from '@chakra-ui/react'
import useResultAnimation from '../Custom-Hooks/useResultAnimation'
import AuthorBox from "./AuthorBox"
import QuoteBox from "./QuoteBox"
import { motion } from "framer-motion"


const instructionsText = `You have 20 seconds to 
 drag or double click the correct author to the quote. Three wrong answers and you're Out. Correct Answers will
 add two second to the timer.  GoodLuck! `
 

const Instructions = () => {
  const largeAnimationCorrect = {y: [0,-400,0], x: [0,100,0]}
  const largeAnimationIncorrect = {y: [0,-400,0], x: [0,-100,0]}
  const smallAnimationCorrect = {y: [0,-200,0,0]}
  const smallAnimationIncorrect ={y: [0,-400,0,0]}
  const animationCorrect = window.innerWidth < 1000 ? smallAnimationCorrect : largeAnimationCorrect
  const animationIncorrect = window.innerWidth < 1000 ? smallAnimationIncorrect : largeAnimationIncorrect
  
  return (
    <DndProvider backend={TouchBackend}>
      <Flex my={{base: 15, lg: 20}}  justifyContent='space-around' height={'70%'} alignItems={'center'}>
        <QuoteBox >{instructionsText}</QuoteBox>
      </Flex> 

      <Center height={'70%'} justifyContent='space-around' flexDirection={{base: 'column', lg: 'row'}}>
        <motion.div
          animate ={animationCorrect}
          transition= {{ 
            duration: 2, 
            times: [0,0.25,0.5,1],
            repeat: 1
          }}>
          <AuthorBox gameDispatch={()=> null}>Author</AuthorBox>
        </motion.div>
        <motion.div
          animate ={animationIncorrect}
          transition= {{ 
            duration: 2,
            delay: 1,
            repeat: 1,   
            times: [0,0.25,0.5,1]
          }}>
          <AuthorBox gameDispatch={()=> null}>Author</AuthorBox>
        </motion.div>
      </Center>   
    </DndProvider>
  )
}

export default Instructions