import {useLottie} from 'lottie-react'
import { useToast } from '@chakra-ui/react'
import thumbsUpAnimation from '../Animations/36673-all-the-best.json'
import thumbsDownAnimation from '../Animations/3983-thumbs-down.json'

const style = {
  height: '35vh'
}
const LottieWinAnimation =() => {
 
  const options = {
    animationData: thumbsUpAnimation,
    loop: false,
    autoplay: true,
  }
  const {View, setSpeed} = useLottie(options,style)
  setSpeed(3)
  return View
}   

const LottieloseAnimation =() => {
  
  const options = {
    animationData: thumbsDownAnimation,
    loop: false,
    autoplay: true,
  }

  const {View, setSpeed} = useLottie(options,style)
  setSpeed(1)
  return View
}

const Results = (didWin) => {
  const toast = useToast()
  
  return () => toast({
    position: 'top',
    duration: 500,
    render: didWin? () => (
      <LottieWinAnimation/>
    ) : () => (
      <LottieloseAnimation/>
    ),
  })
}


export default Results