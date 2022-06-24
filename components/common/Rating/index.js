import { useState } from 'react'
import { Box, Stack, Text } from '@chakra-ui/react'
import { AiFillStar } from 'react-icons/ai'

const Rating = ({ rate }) => {
	const [rating, setRating] = useState(0)
	const [hover, setHover] = useState(0)

	return (
		<Box>
			<Stack direction='row'>
				{Array.from({ length: 5 }, (_, i) => {
					i += 1
					return (
						<Box
							w={2}
							key={i}
							className={i <= (hover || rating) ? 'on' : 'off'}
							onClick={() => setRating(i)}
							onMouseEnter={() => setHover(i)}
							onMouseLeave={() => setHover(rating)}
							cursor='pointer'
						>
							<AiFillStar />
						</Box>
					)
				})}
			</Stack>
			<Box display='flex' alignItems='center' mt={2}>
				<AiFillStar color='yellow.200' size='10' />
				<Text color='yellow.200' ml={1} fontSize='xs'>
					{rate}
				</Text>
			</Box>
		</Box>
	)
}

export default Rating
