/* eslint-disable react-hooks/exhaustive-deps */
import {Center, Flex, Spinner} from '@chakra-ui/react'
import GameBoard from './GameBoard'
import getGameData from '../Utils/api'
import { useEffect,useReducer,useState } from 'react'
import useResultAnimation from '../Custom-Hooks/useResultAnimation'
import ScoreBoard from './ScoreBoard'
import { gameDataReducer, randomizeAuthors,initialState } from '../Utils/stateUtils'

const Game = () => {
  const WinAnimation = useResultAnimation(true)
  const LoseAnimation = useResultAnimation(false)
  const [gameState, gameDispatch] = useReducer(gameDataReducer, initialState)
  
  useEffect(() => {
    const {didWinLast} = gameState
    if(didWinLast !== null) {
      didWinLast ? WinAnimation() : LoseAnimation()
    }
  },[gameState.realQuote.text])
  
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
  
  const {loading, realQuote, fakeQuote, didWinLast} = gameState
  
  const authors = [realQuote.author,fakeQuote.author]
  const currentQuote = realQuote.text
  const randomAuthors = randomizeAuthors(authors)
  return (
    <Flex height='93vh' overflow='hidden' width='100vw' flexDirection={'column'}> 
      
      <ScoreBoard
        startingTimer={20}
        didWinLast={didWinLast}
        currentQuote={currentQuote} 
      />
       
      {loading    
        ? <Center height='100%'> <Spinner size={'xl'}/></Center>

        : <GameBoard 
          gameDispatch={gameDispatch}
          quote={realQuote.text} 
          realAuthor={randomAuthors[0]} 
          fakeAuthor={randomAuthors[1]} /> }
    </Flex>
  )
}
  
export default Game