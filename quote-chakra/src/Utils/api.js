const queryUrl = 'https://api.quotable.io/random?maxLength=150'

// const getShortQuotes = (quotes, limit = 150) => {
// 	const shortenedQuotes = quotes.filter(
// 		(quote) => quote.quoteText.length < limit,
// 	)
// 	return shortenedQuotes
// }
const getQuote = async () => {
	const params = `?maxLength=150'`
	const response = await fetch(`${queryUrl}${params}`)
	if (!response.ok) {
		throw new Error(response.error)
	}
	const quote = await response.json()
	return quote
}
const formatGameData = (quotes) => {
	const gameData = quotes.slice(0, 2).map((quote) => {
		return {
			author: quote.author,
			text: quote.content,
			genre: quote.tags[0],
		}
	})
	return gameData
}

const getGameData = async (quotes = 2) => {
	const quoteArray = await Promise.all([getQuote(), getQuote()])

	let formattedGameData = formatGameData(quoteArray)
	return formattedGameData
}
export default getGameData
