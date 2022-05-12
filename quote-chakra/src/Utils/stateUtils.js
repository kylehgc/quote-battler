export const gameDataReducer = (state, action) => {
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

export const randomizeAuthors = (authors) => {
	const randomAuthors = authors.slice(0)
	randomAuthors.sort((a, b) => 0.5 - Math.random())
	return randomAuthors
}

export const initialState = {
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
