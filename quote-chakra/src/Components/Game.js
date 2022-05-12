/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Flex } from '@chakra-ui/react'
import GameBoard from './GameBoard'
import getGameData from '../Utils/api'
import { useEffect } from 'react'
import useResultAnimation from '../Custom-Hooks/useResultAnimation'
import Instructions from './Instructions'
import Results from './Results'
import useGameState from '../Custom-Hooks/useGameState'

const Game = () => {
	const WinAnimation = useResultAnimation(true)
	const LoseAnimation = useResultAnimation(false)
	const {
		gameState: { gamePlaying, realQuote, loading, score, didWinLast },
		gameDispatch,
	} = useGameState()

	useEffect(() => {
		if (didWinLast !== null) {
			didWinLast ? WinAnimation() : LoseAnimation()
		}
	}, [realQuote])

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await getGameData()
				gameDispatch({ type: 'success', data: data })
			} catch (error) {
				gameDispatch({ type: 'error', error: error })
			}
		}
		if (loading) {
			getData()
		}
	}, [loading])

	if (gamePlaying) {
		return <GameBoard />
	}

	return (
		<Flex height="93vh" width="100vw" flexDirection={'column'}>
			<Button
				alignSelf="center"
				borderRadius={30}
				bg="whiteAlpha.900"
				fontFamily="montserrat"
				color="#8a4fff"
				type="whiteAlpha"
				mt="5vh"
				minwidth="30vh"
				minheight="20vh"
				height="auto"
				width="auto"
				padding={4}
				fontSize="4vh"
				onClick={() => gameDispatch({ type: 'new' })}
			>
				New Game
			</Button>
			{score ? (
				<Results score={score} />
			) : (
				<Instructions gameDispatch={gameDispatch} />
			)}
		</Flex>
	)
}

export default Game
