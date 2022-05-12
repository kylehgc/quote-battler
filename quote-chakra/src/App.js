import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Game from './Components/Game'
import '@fontsource/open-sans/700.css'
import '@fontsource/montserrat/700.css'
import theme from './Components/extendedTheme'
import { GameStateProvider } from './Custom-Hooks/useGameState'
function App() {
	return (
		<ChakraProvider theme={theme}>
			<GameStateProvider>
				<Game />
			</GameStateProvider>
		</ChakraProvider>
	)
}

export default App
