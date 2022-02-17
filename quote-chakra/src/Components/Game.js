/* eslint-disable react-hooks/exhaustive-deps */
import {Button, Center, Flex, Spinner} from '@chakra-ui/react'
import GameBoard from './GameBoard'
import getGameData from '../Utils/api'
import { useEffect,useReducer,useState } from 'react'
import useResultAnimation from '../Custom-Hooks/useResultAnimation'
import ScoreBoard from './ScoreBoard'
import { gameDataReducer, randomizeAuthors,initialState } from '../Utils/stateUtils'
import Instructions from './Instructions'
import Results from './Results'


const Game = () => {
  const WinAnimation = useResultAnimation(true)
  const LoseAnimation = useResultAnimation(false)
  const [gameState, gameDispatch] = useReducer(gameDataReducer, initialState)
  
  useEffect(() => {
    const {didWinLast} = gameState
    if(didWinLast !== null) {
      didWinLast ? WinAnimation() : LoseAnimation()
    }
  },[gameState.realQuote])
  
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
  
  const {loading, realQuote, fakeQuote, didWinLast, gamePlaying, score } = gameState
  
  const authors = [realQuote.author,fakeQuote.author]
  const currentQuote = realQuote.text
  const randomAuthors = randomizeAuthors(authors)

  if(gamePlaying) {

    return(
      <Flex height='93vh'  width='100vw' flexDirection={'column'}>
        <ScoreBoard
          gameDispatch={gameDispatch}
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
  
  return (
    <Flex height='93vh' overflow='hidden' width='100vw' flexDirection={'column'}>
    
      <Button alignSelf='center' 
        borderRadius={30} 
        fontFamily='montserrat' 
        color='#8a4fff' 
        type='whiteAlpha' 
        mt='5vh' 
        minwidth='30vh' 
        minheight='20vh'
        height='auto'
        width='auto'
        padding={4} 
        fontSize='4vh'
        onClick={() => gameDispatch({type: 'new'})}
      > 
        New Game
      </Button> 
      {score ?  <Results score={score}/> : <Instructions gameDispatch={gameDispatch}/> }
     
      
    </Flex>
  )
}
  
export default Game