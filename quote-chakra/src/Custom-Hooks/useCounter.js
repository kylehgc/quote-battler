import { useEffect, useRef, useState } from 'react'

const useCounter = (startingTimer) => {
	const [timeLeft, setTimeLeft] = useState(startingTimer)

	const id = useRef(null)
	const clear = () => window.clearInterval(id.current)

	useEffect(() => {
		id.current = window.setInterval(() => {
			setTimeLeft((time) => time - 1)
		}, 1000)
		return clear
	}, [])

	useEffect(() => {
		if (timeLeft === 0) {
			clear()
		}
	}, [timeLeft])

	return [timeLeft, setTimeLeft]
}

export default useCounter
