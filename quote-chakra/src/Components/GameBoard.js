import { Flex, Center, Spinner } from '@chakra-ui/react'
import useGameState from '../Custom-Hooks/useGameState'
import QuoteBoard from './QuoteBoard'
import ScoreBoard from './ScoreBoard'

const GameBoard = () => {
	const {
		gameState: { loading },
	} = useGameState()
	return (
		<Flex height="93vh" width="100vw" flexDirection={'column'}>
			<ScoreBoard startingTimer={30} />
			{loading ? (
				<Center height="100%">
					<Spinner size={'xl'} />
				</Center>
			) : (
				<QuoteBoard />
			)}
		</Flex>
	)
}

export default GameBoard
