import { Box, Button, Icon, Stack, Text } from '@chakra-ui/react'
import { FiPlayCircle } from 'react-icons/fi'
import Link from 'next/link'
import dayjs from 'dayjs'
import Rating from '../../common/Rating'
import { truncate, slugify } from '../../../utils'
import { AiFillRead } from 'react-icons/ai'
import Image from 'next/image'

const ResourceCard = ({ id, title, description, rate, thumbnail_url, published_at, type }) => {
	return (
		<Stack bgColor='brand.secondary' borderRadius='sm' p={4} h='420px' w='full' justifyContent='space-between'>
			<Box flex='1'>
				<Box position={'relative'} w='full' height='130px'>
					<Image layout='fill' src={thumbnail_url} alt={title} />
				</Box>
				<Text color='gray.100' fontSize='sm' fontWeight='bold' my={4}>
					{truncate(title, 35)}
				</Text>
				<Text color='gray.400' fontSize='xs' fontStyle='italic'>
					Published at: {dayjs(published_at).format('MMM DD, YYYY') || ''}
				</Text>
				{type === 'video' && <Rating videoId={id} rate={rate} />}
				<Text color='gray.300' fontSize='sm' fontWeight='bold' pt={4}>
					{truncate(description, 50)}
				</Text>
			</Box>
			<Link href={`/${type === 'video' ? 'videos' : 'articles'}/${slugify(title)}--${id}`}>
				<Box display='flex' alignItems='center' justifyContent='flex-end'>
					<Button
						bgColor='brand.accent'
						color='white'
						size='sm'
						w='fit-content'
						leftIcon={type === 'video' ? <FiPlayCircle /> : <AiFillRead />}
						textTransform='uppercase'
						_hover={{ opacity: 0.8 }}
					>
						{type === 'video' ? 'Watch' : 'Read'}
					</Button>
				</Box>
			</Link>
		</Stack>
	)
}

export default ResourceCard
