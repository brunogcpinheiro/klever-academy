import { Box, Link, Stack, Text } from '@chakra-ui/react'
import dayjs from 'dayjs'
import NextLink from 'next/link'
import parse from 'html-react-parser'
import Image from 'next/image'

const Article = ({ article }) => {
	return (
		<Stack spacing={6} mt={10} maxW='990px' mx='auto'>
			<Box>
				<Text fontSize='5xl' fontWeight='bold' color='white'>
					{article?.title}
				</Text>
			</Box>
			<Box>
				<Text fontSize='sm' fontWeight='bold' color='gray.300'>
					Original:{' '}
					<NextLink href={article?.font} passHref>
						<Link target={'_blank'}>{article?.font}</Link>
					</NextLink>
				</Text>
			</Box>
			<Box w='full' height='400px' position='relative'>
				<Image layout='fill' src={article?.thumbnail_url} alt={article?.title} />
			</Box>
			<Stack>
				<Text fontSize='md' color='gray.300' fontStyle='italic'>
					Published At: {dayjs(article?.published_at).format('MMM DD, YYYY')}
				</Text>
				<Text fontWeight='bold' color='gray.400' fontSize='sm'>
					Author: Klever
				</Text>
				<Box pt={10}>
					<Text fontSize='md' color='white'>
						{parse(article?.text) || ''}
					</Text>
				</Box>
			</Stack>
		</Stack>
	)
}

export default Article
