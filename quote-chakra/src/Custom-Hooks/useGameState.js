import { createContext, useContext } from 'react'
import { useReducer } from 'react'

const initialState = {
	realQuote: {},
	fakeQuote: {},
	loading: false,
	quoteChoice: null,
	over: false,
	error: null,
	didWinLast: null,
	score: null,
	gamePlaying: false,
}

const GameContext = createContext()

const gameStateReducer = (state, action) => {
	if (action.type === 'success') {
		return {
			...state,
			realQuote: action.data[0],
			fakeQuote: action.data[1],
			loading: false,
			error: null,
		}
	} else if (action.type === 'AuthorChoice') {
		const didWin = action.choice === state.realQuote.author

		return {
			...state,
			loading: true,
			didWinLast: didWin,
		}
	} else if (action.type === 'error') {
		return {
			...state,
			error: action.error,
		}
	} else if (action.type === 'new') {
		return {
			...initialState,
			loading: true,
			gamePlaying: true,
		}
	} else if (action.type === 'gameover') {
		return {
			...state,
			gamePlaying: false,
			score: action.score,
		}
	}
}
const useGameState = () => {
	const gameContext = useContext(GameContext)
	return gameContext
}

export const GameStateProvider = ({ children }) => {
	const [gameState, gameDispatch] = useReducer(gameStateReducer, initialState)
	const value = { gameState, gameDispatch }
	return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

export default useGameState
