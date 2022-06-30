import { useCallback, useEffect, useState } from 'react'
import { Box, Button, Stack, Text, Tooltip } from '@chakra-ui/react'
import { AiFillStar } from 'react-icons/ai'
import { useRateVideo } from '../../../hooks/videos/useRateVideo'
import toast from 'react-hot-toast'
import { useAuth } from '../../../context/Auth'

const Rating = ({ videoId, rate }) => {
	const [rating, setRating] = useState(0)
	const [hover, setHover] = useState(0)
	const { submitRate } = useRateVideo()
	const { user } = useAuth()

	useEffect(() => {
		if (user) {
			const videoRate = user?.rateVideos?.find(rate => Object.keys(rate)[0] === String(videoId))
			if (videoRate) setRating(Object.values(videoRate))
		}
	}, [user, videoId])

	return (
		<Box>
			<Stack direction='row'>
				{Array.from({ length: 5 }, (_, i) => {
					i += 1
					return (
						<Box
							cursor={rating !== 0 ? 'not-allowed' : 'pointer'}
							pointerEvents={rating !== 0 ? 'not-allowed' : 'pointer'}
							w={2}
							key={i}
							className={i <= (hover || rating) ? 'on' : 'off'}
							onClick={() => {
								if (rating === 0) {
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
								}
							}}
							onMouseEnter={() => rating === 0 && setHover(i)}
							onMouseLeave={() => rating === 0 && setHover(rating)}
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
