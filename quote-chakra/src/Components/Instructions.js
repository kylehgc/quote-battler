import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
import { Flex, Center } from '@chakra-ui/react'

import AuthorBox from './AuthorBox'
import QuoteBox from './QuoteBox'
import { motion } from 'framer-motion'
import TouchPreview from './TouchPreview'
import useGameState from '../Custom-Hooks/useGameState'

const Instructions = () => {
	const { gameDispatch } = useGameState()
	const largeAnimationLeft = { y: [0, -400, 0], x: [0, 100, 0] }
	const largeAnimationRight = { y: [0, -400, 0], x: [0, -100, 0] }
	const smallAnimationLeft = { y: [0, -300, 0, 0] }
	const smallAnimationRight = { y: [0, -500, 0, 0] }
	const animationLeft =
		window.innerWidth < 1000 ? smallAnimationLeft : largeAnimationLeft
	const animationRight =
		window.innerWidth < 1000 ? smallAnimationRight : largeAnimationRight

	return (
		<DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
			<Flex
				my={{ base: 15, lg: 20 }}
				justifyContent="space-around"
				height={'70%'}
				alignItems={'center'}
			>
				<QuoteBox>
					Drag or double click the correct author to the quote. Three wrong or
					timer ends and you're out. Correct Answers will add five second to the
					timer.`
				</QuoteBox>
			</Flex>

			<Center
				height={'70%'}
				justifyContent="space-around"
				flexDirection={{ base: 'column', lg: 'row' }}
			>
				<motion.div
					animate={animationLeft}
					transition={{
						duration: 2,
						times: [0, 0.25, 0.5, 1],
						repeat: 1,
					}}
				>
					<AuthorBox onChoice={() => gameDispatch({ type: 'new' })}>
						Author
					</AuthorBox>
				</motion.div>
				<motion.div
					animate={animationRight}
					transition={{
						duration: 2,
						delay: 1,
						repeat: 1,
						times: [0, 0.25, 0.5, 1],
					}}
				>
					<AuthorBox onChoice={() => gameDispatch({ type: 'new' })}>
						Author
					</AuthorBox>
					<TouchPreview />
				</motion.div>
			</Center>
		</DndProvider>
	)
}

export default Instructions
