import {Center, Flex, Spinner} from '@chakra-ui/react'
import GameBoard from './GameBoard'
import getGameData from '../Utils/api'
import { useEffect,useReducer,useState } from 'react'

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
  } else if (action.type === 'error') {
    return {
      ...state,
      error: action.error
    }
  }
}
const initialState = {
  realQuote: null,
  fakeQuote: null,
  loading: true,
  error: null
}
const Game = () => {
  const [quoteState, quoteDispatch] = useReducer(gameDataReducer, initialState)
  const [quoteChoice, setQuoteChoice] = useState(null)
  const [didWin, setDidWin] = useState(false)

  useEffect(() => {
    
    if(quoteChoice) {
      const {author} = quoteState.realQuote
      setDidWin(quoteChoice === author) 
    }
  },[quoteChoice])

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getGameData()
        quoteDispatch({type: 'success', data: data})
      } catch (error) {
        quoteDispatch({type: 'error', error: error})
      }
    }
    getData()
  },[])

  const {loading, realQuote, fakeQuote} = quoteState
  if(loading) {
    return <Center><Spinner size={'xl'}/></Center>
  }
  const authors = [realQuote.author,fakeQuote.author]
  const randomAuthors = randomizeAuthors(authors)
  
  return (
    <Flex height={'100vh'} width={'100vw'} bg={'teal'} alignItems={'center'} justifyContent={'center'}>
      {quoteChoice 
        ? <Center  fontSize={40}>{didWin.toString().toUpperCase()}</Center>
        : 
        <GameBoard 
          setQuoteChoice={setQuoteChoice}
          quote={realQuote.text} 
          realAuthor={randomAuthors[0]} 
          fakeAuthor={randomAuthors[1]} />}
    </Flex>
  )
}
  
export default Game