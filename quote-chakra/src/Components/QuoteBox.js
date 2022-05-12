import { Center, SlideFade, Box, Flex } from '@chakra-ui/react'
import { useDrop } from 'react-dnd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
const QuoteBox = ({ children }) => {
	const [{ isOver }, drop] = useDrop(() => ({
		accept: 'AuthorBox',
		drop: () => ({ name: 'AuthorBox' }),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
		}),
	}))

	return (
		<SlideFade in={true}>
			<Flex
				ref={drop}
				layerStyle={'quoteBox'}
				borderColor={isOver ? 'blue' : 'black'}
			>
				<Box color="white" p={3.5} position="absolute" top="0" left="0">
					<FontAwesomeIcon size="xl" icon={faQuoteLeft} />
				</Box>
				<Box color="white" p={3.5} position="absolute" bottom="0" right="0">
					<FontAwesomeIcon size="xl" icon={faQuoteRight} />
				</Box>
				<Center textAlign="center" cursor="default" p={{ base: 10, lg: 14 }}>
					{children}
				</Center>
			</Flex>
		</SlideFade>
	)
}

export default QuoteBox
