import { Box, Link, Stack, Text } from '@chakra-ui/react'
import dayjs from 'dayjs'
import NextLink from 'next/link'
import Player from '../../Player'

const Article = ({ article }) => {
	return (
		<Stack spacing={6} mt={10} maxW='990px' mx='auto'>
			<Box>
				<Text fontSize='5xl' fontWeight='bold' color='white'>
					{article?.title}
				</Text>
			</Box>
			<Box>
				<Text fontSize='5xl' fontWeight='bold' color='white'>
					Original text:{' '}
					<NextLink href={article?.font}>
						<Link>{article?.font}</Link>
					</NextLink>
				</Text>
			</Box>
			<Stack>
				<Text fontSize='md' color='white' fontStyle='italic'>
					Published At: {dayjs(article?.published_at).format('MMM DD, YYYY')}
				</Text>
				<Text fontSize='xl' color='white' fontWeight='bold'>
					Overview
				</Text>
				<Text fontSize='md' color='white'>
					{article?.description}
				</Text>
				<Stack>
					<Stack direction='row'>
						<Text fontWeight='bold' color='white' fontSize='sm'>
							Author:
						</Text>
						<Text color='white' fontSize='sm'>
							Klever
						</Text>
					</Stack>
					<Stack direction='row'>
						<Text fontWeight='bold' color='white' fontSize='sm'>
							Reward:
						</Text>
						<Text color='brand.primary' fontSize='sm'>
							100 KLV
						</Text>
					</Stack>
				</Stack>
			</Stack>
			<Box w='full'>
				<Player videoUrl={article?.video_url} />
			</Box>
		</Stack>
	)
}

export default Article
