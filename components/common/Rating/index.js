import { useState } from 'react'
import { Box, Stack, Text } from '@chakra-ui/react'
import { AiFillStar } from 'react-icons/ai'
import { useRateVideo } from '../../../hooks/videos/useRateVideo'
import toast from 'react-hot-toast'

const Rating = ({ videoId, rate }) => {
	const [rating, setRating] = useState(0)
	const [hover, setHover] = useState(0)
	const { submitRate } = useRateVideo()

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
							onClick={() => {
								if (localStorage.getItem('klever-academy:token')) {
									submitRate({
										id: videoId,
										rating: i,
										token: localStorage.getItem('klever-academy:token'),
									})
									setRating(i)
								} else {
									toast('Please login to rate this video', { type: 'error' })
								}
							}}
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
				<AiFillStar color='yellow' size='10' />
				<Text color='yellow.200' ml={1} fontSize='xs'>
					{rate}
				</Text>
			</Box>
		</Box>
	)
}

export default Rating
