import { useState, useEffect } from 'react'
import { Circle, Flex } from '@chakra-ui/react'
import Lives from './Lives'
import useCounter from '../Custom-Hooks/useCounter'

const getCounterColour = (secondsLeft) => {
	if (secondsLeft % 2 === 0 || secondsLeft > 12) {
		return '#8a4fff'
	} else if (secondsLeft > 5) {
		return 'yellow.400'
	} else return 'red.400'
}

const ScoreBoard = ({
	gameDispatch,
	currentQuote,
	didWinLast,
	startingTimer = 30,
}) => {
	const [score, setScore] = useState(0)
	const [livesLeft, setLivesLeft] = useState(3)
	const [timeLeft, setTimeLeft] = useCounter(startingTimer)

	useEffect(() => {
		if (timeLeft < 1 || livesLeft < 1) {
			gameDispatch({ type: 'gameover', score: score })
		}
	})
	useEffect(
		() => {
			if (didWinLast !== null) {
				if (didWinLast) {
					setScore((total) => total + 1)
					setTimeLeft(timeLeft + 5)
				} else setLivesLeft((lives) => lives - 1)
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[currentQuote],
	)

	const counterColor = getCounterColour(timeLeft)

	return (
		<Flex flexDirection="row" width="100%" height="15%">
			<Flex mt={4} ml="2" alignItems="center" width="40vw">
				<Circle layerStyle={'scoreCircle'}>{score}</Circle>
				<Circle layerStyle={'scoreCircle'} color={counterColor} ml={3}>
					{timeLeft}
				</Circle>
			</Flex>
			<Flex
				mt={4}
				flexDirection="row-reverse"
				alignItems="center"
				mr={2}
				width="90%"
			>
				<Lives livesLeft={livesLeft} />
			</Flex>
		</Flex>
	)
}
export default ScoreBoard
