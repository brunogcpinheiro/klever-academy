import { useState } from 'react'
import { Box, Button, Icon, Stack, Text } from '@chakra-ui/react'
import { BiMovie } from 'react-icons/bi'
import { AiFillStar } from 'react-icons/ai'
import { FiPlayCircle } from 'react-icons/fi'

const ResourceCard = ({ title, videos, viewers }) => {
	const [rating, setRating] = useState(0)
	const [hover, setHover] = useState(0)

	return (
		<Stack bgColor='brand.secondary' w='fit-content' borderRadius='sm' p={4}>
			<Icon as={BiMovie} color='gray.100' boxSize='10' />
			<Text color='gray.100' fontSize='sm' fontWeight='bold'>
				{title}
			</Text>
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
			<Text color='gray.300' fontSize='sm' fontWeight='bold'>
				{videos} videos
			</Text>
			<Text color='gray.300' fontSize='sm' fontWeight='bold'>
				{viewers} Viewers
			</Text>
			<Box display='flex' alignItems='center' justifyContent='flex-end'>
				<Button
					bgColor='brand.accent'
					color='white'
					size='sm'
					w='fit-content'
					leftIcon={<FiPlayCircle />}
					textTransform='uppercase'
					_hover={{ opacity: 0.8 }}
				>
					Play
				</Button>
			</Box>
		</Stack>
	)
}

export default ResourceCard
