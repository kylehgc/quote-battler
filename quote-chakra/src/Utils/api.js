const queryUrl = 'https://quote-garden.herokuapp.com/api/v3/quotes/random'

export const mockApi = () =>  [{
  author: "author 1",
  text: "text 1",
  genre: "genre 1" 
},{author: "author 2",
  text: "text 2",
  genre: "genre 2" }]

 

const getShortQuotes = (quotes,limit=150) => {
  const shortenedQuotes = quotes.filter((quote) => quote.quoteText.length < limit)
  return shortenedQuotes
}
const getQuotes = async () => {
  const params = `?count=10`
  const response = await fetch(`${queryUrl}${params}`)
  if(!response.ok) {
    throw new Error(response.error)
  }
  const quotes = await response.json()
  return quotes.data
  
}
const formatGameData = (quotes) => {
  const gameData = quotes.slice(0,2).map((quote) => {
    return {author: quote.quoteAuthor, text: quote.quoteText, genre: quote.quoteGenre }
  })
  return gameData
}

const getGameData = async(quotes=2) => {
  const fullQuotes = await getQuotes()
  const shortenedQuotes = getShortQuotes(fullQuotes)
  let formattedGameData = formatGameData(shortenedQuotes)
  return formattedGameData
}
export default getGameData