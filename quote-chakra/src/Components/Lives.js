import { Circle } from '@chakra-ui/react'
import { Fragment } from 'react/cjs/react.production.min'
const Lives = ({ livesLeft }) => {
	return (
		<Fragment>
			<Circle
				visibility={livesLeft > 2 ? 'visible' : 'hidden'}
				layerStyle={'scoreCircle'}
				bg="whiteAlpha.700"
				ml={0.5}
			>
				🤍
			</Circle>
			<Circle
				layerStyle={'scoreCircle'}
				visibility={livesLeft > 1 ? 'visible' : 'hidden'}
				bg="whiteAlpha.700"
				ml={0.5}
			>
				🤍
			</Circle>
			<Circle
				layerStyle={'scoreCircle'}
				visibility={livesLeft > 0 ? 'visible' : 'hidden'}
				bg="whiteAlpha.700"
				ml={0.5}
			>
				🤍
			</Circle>
		</Fragment>
	)
}
export default Lives
