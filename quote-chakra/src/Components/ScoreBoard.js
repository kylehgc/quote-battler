import {useState,useEffect, useRef} from 'react'
import { Circle, Center, HStack, Flex } from '@chakra-ui/react'
import Lives from './Lives'
import useCounter from '../Custom-Hooks/useCounter'

const getCounterColour = (secondsLeft) => {
  if(secondsLeft % 2 === 0 || secondsLeft > 12) {
    return '#8a4fff'
  } else if (secondsLeft > 5) {
    return 'yellow.400'
  } else return 'red.400'
}

const ScoreBoard = ({currentQuote, didWinLast, startingTimer=20}) => {
  const [correctTotal, setCorrectTotal] = useState(0)
  const [livesLeft, setLivesLeft] = useState(3)
  const [timeLeft,setTimeLeft] = useCounter(startingTimer)
  // const [timeLeft, setTimeLeft] = useState(startingTimer)

  // const id = useRef(null)
  // const clear = () => window.clearInterval(id.current)
  
  // useEffect(() => {
  //   if(timeLeft !== null){
  //     id.current = window.setInterval(() => {
  //       setTimeLeft((time) => time - 1)
  //     }, 1000) 
  //     return clear}
  // },[])

  // useEffect(() => {
  //   if (timeLeft === 0) {
  //     clear()
  //   }
  // }, [timeLeft])
  
  useEffect(() => {
    if (didWinLast !== null){
      if(didWinLast) { 
        setCorrectTotal((total) => total + 1) 
        setTimeLeft((timeLeft) +1) 
      } else setLivesLeft((lives) => lives - 1)}
  } 
  , [currentQuote])
  
  
  const counterColor = getCounterColour(timeLeft)

  return (
    <Flex flexDirection='row' width='100%' height='15%'>
      <Flex mt={4} ml='2' alignItems='center' width='40vw' >
        <Circle layerStyle={'scoreCircle'}>{correctTotal}</Circle> 
        <Circle layerStyle={'scoreCircle'} color={counterColor} ml={3}>{timeLeft}</Circle>    
      </Flex>
      <Flex mt={4} flexDirection='row-reverse' alignItems='center' mr={2} width='90%'>
        <Lives livesLeft={livesLeft} />
      </Flex>
    </Flex>   
  )
}
export default ScoreBoard