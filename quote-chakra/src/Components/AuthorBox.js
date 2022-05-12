import { Center, SlideFade } from '@chakra-ui/react'
import { useDrag } from 'react-dnd'

const AuthorBox = ({ children, onChoice }) => {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: 'AuthorBox',
		item: { text: children },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
		end: (_, monitor) => {
			const dropResult = monitor.getDropResult()
			if (dropResult) {
				onChoice()
			}
		},
	}))
	const visibility = isDragging ? 'hidden' : 'visible'
	return (
		<SlideFade in={true}>
			<Center
				onDoubleClick={() => onChoice()}
				ref={drag}
				visibility={visibility}
				data-testid="quoteBox"
				layerStyle={'authorBox'}
			>
				{children.toUpperCase()}
			</Center>
		</SlideFade>
	)
}

export default AuthorBox
