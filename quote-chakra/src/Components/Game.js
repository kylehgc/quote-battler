import {Center, Flex, Spinner, Heading, Box, useRangeSlider} from '@chakra-ui/react'
import GameBoard from './GameBoard'
import getGameData from '../Utils/api'
import { useEffect,useReducer,useState } from 'react'
import useResults from './useResults'

const randomizeAuthors =(authors) => {
  const randomAuthors = authors.slice(0)
  randomAuthors.sort((a,b) => 0.5 - Math.random())
  return randomAuthors
}

const gameDataReducer = (state,action) => {
  if(action.type === 'success') {
    return {
      realQuote: action.data[0],
      fakeQuote: action.data[1],
      loading: false,
      error: null
    }
  } else if (action.type === 'newQuote') {
    
    return {
      ...state,
      loading: true
      
    }     
  } else if (action.type === 'error') {
    return {
      ...state,
      error: action.error
    }
  }
}
const initialState = {
  realQuote: {},
  fakeQuote: {},
  loading: true,
  over: false,
  error: null
}
const Game = () => {
  const LottieWin = useResults(true)
  const LottieLose = useResults(false)
  const [gameState, gameDispatch] = useReducer(gameDataReducer, initialState)
  const [quoteChoice, setQuoteChoice] = useState(null)
  const [didWin, setDidWin] = useState(null)

  useEffect(() => {
    if(quoteChoice) {
      const {author} = gameState.realQuote
      
      quoteChoice === author ? LottieWin() : LottieLose()
      gameDispatch({type: 'newQuote'})
    } 
  },[quoteChoice])

  useEffect(() => {

    const getData = async () => {
      try {
        const data = await getGameData()
        gameDispatch({type: 'success', data: data})
      } catch (error) {
        gameDispatch({type: 'error', error: error})
      }
    }
    if(gameState.loading) { 
      getData()
    }
  },[gameState.loading])
  
  const {loading, realQuote, fakeQuote} = gameState
  
  const authors = [realQuote.author,fakeQuote.author]
  const randomAuthors = randomizeAuthors(authors)
  return (
    <Flex height='93vh' overflow='hidden' width='100vw' flexDirection={'column'}> 
      <Center textAlign='center' height='15%' width={'100vw'} ></Center>   
      {loading    
        ? <Center height='100%'> <Spinner size={'xl'}/></Center>

        : <GameBoard 
          setQuoteChoice={setQuoteChoice}
          quote={realQuote.text} 
          realAuthor={randomAuthors[0]} 
          fakeAuthor={randomAuthors[1]} /> }
    </Flex>
  )
}
  
export default Game