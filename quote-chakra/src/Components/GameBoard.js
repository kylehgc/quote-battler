import {Flex, Center,Spinner } from '@chakra-ui/react'
import QuoteBoard from './QuoteBoard'
import ScoreBoard from './ScoreBoard'

const GameBoard = ({
  didWinLast, currentQuote, loading,quote, realAuthor, fakeAuthor, gameDispatch}) => {
   
  return (   
    <Flex height='93vh'  width='100vw' flexDirection={'column'}>
      <ScoreBoard
        gameDispatch={gameDispatch}
        startingTimer={30}
        didWinLast={didWinLast}
        currentQuote={currentQuote} 
      />
      {loading 
        ? <Center height='100%'> <Spinner size={'xl'}/></Center> 
        
        : <QuoteBoard 
          quote={quote} 
          realAuthor={realAuthor} 
          gameDispatch={gameDispatch} 
          fakeAuthor={fakeAuthor}/>}
       
    </Flex>

  )
}

export default GameBoard