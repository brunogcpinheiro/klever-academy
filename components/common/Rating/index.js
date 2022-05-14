import { useState } from 'react'
import { Box, Stack } from '@chakra-ui/react'
import { AiFillStar } from 'react-icons/ai'

const Rating = () => {
	const [rating, setRating] = useState(0)
	const [hover, setHover] = useState(0)

	return (
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
	)
}

export default Rating
