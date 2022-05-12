import { Flex, Center } from '@chakra-ui/react'
import QuoteBox from './QuoteBox'
import AuthorBox from './AuthorBox'
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import Preview from './TouchPreview'
import useGameState from '../Custom-Hooks/useGameState'

const randomizeAuthors = (authors) => {
	const randomAuthors = authors.slice(0)
	randomAuthors.sort((a, b) => 0.5 - Math.random())
	return randomAuthors
}

const QuoteBoard = ({ realAuthor, fakeAuthor }) => {
	const { gameState, gameDispatch } = useGameState()
	const { realQuote, fakeQuote } = gameState

	const authors = [realQuote.author, fakeQuote.author]
	const randomAuthors = randomizeAuthors(authors)

	return (
		<Flex flexDirection={'column'} alignItems="center" height={'100%'}>
			<DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
				<Flex
					my={{ base: 15, lg: 20 }}
					justifyContent="center"
					height={'70%'}
					alignItems={'center'}
				>
					<QuoteBox>{realQuote.text}</QuoteBox>
				</Flex>

				<Center
					height={'70%'}
					justifyContent="space-around"
					flexDirection={{ base: 'column', lg: 'row' }}
				>
					<AuthorBox
						onChoice={() =>
							gameDispatch({ type: 'AuthorChoice', choice: randomAuthors[0] })
						}
					>
						{randomAuthors[0]}
					</AuthorBox>
					<AuthorBox
						onChoice={() =>
							gameDispatch({ type: 'AuthorChoice', choice: randomAuthors[1] })
						}
					>
						{randomAuthors[1]}
					</AuthorBox>
					<Preview />
				</Center>
			</DndProvider>
		</Flex>
	)
}

export default QuoteBoard
