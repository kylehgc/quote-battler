import { Center, Heading } from '@chakra-ui/react'

const Results = ({ score }) => {
	let highScore = localStorage.getItem('highScore')
	let newHighScore = false

	if (highScore) {
		if (score > highScore) {
			newHighScore = true
			highScore = score
			localStorage.setItem('highScore', highScore)
		}
	} else {
		localStorage.setItem('highScore', score)
	}

	return (
		<Center flexDirection="column" height="100%" alignItems="center">
			<Heading size="3xl" pb={20} color="red.300">
				GAME OVER
			</Heading>
			{newHighScore ? (
				<Heading size="3xl" color="whiteAlpha.900">
					New High Score!
				</Heading>
			) : null}
			<Heading pt={20} color="whiteAlpha.700" size="2xl">
				High Score: {highScore}{' '}
			</Heading>
			<Heading pt={10} color="whiteAlpha.700" size="2xl">
				Score: {score}{' '}
			</Heading>
		</Center>
	)
}

export default Results
