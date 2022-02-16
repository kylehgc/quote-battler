import {useState,useEffect, useRef} from 'react'

const ScoreBoard = ({currentQuote, didWin, startingTimer=null}) => {
  const [correctTotal, setCorrectTotal] = useState(0)
  const [incorrectTotal, setIncorrectTotal] = useState(0)
  const [timeLeft, setTimeLeft] = useState(startingTimer)
  const id = useRef(null)
  const clear = () => window.clearInterval(id.current)

  useEffect(() => {
    if(timeLeft !== null){
      id.current = window.setInterval(() => {
        setTimeLeft((time) => time - 1)
      }, 1000) 
      return clear}
  },[])

  useEffect(() => {
    if (timeLeft === 0) {
      clear()
    }
  }, [timeLeft])
  
  useEffect(() => {
    didWin ? setCorrectTotal((total) => total + 1) :  setIncorrectTotal((total) => total + 1)
  }, [currentQuote,didWin])

  return (
    <div> Correct: {correctTotal}, incorrectTotal {0}, Timer {timeLeft} </div>
  )
}



