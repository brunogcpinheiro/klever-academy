import Image from 'next/image'
import NextLink from 'next/link'
import dayjs from 'dayjs'
import { Box, Center, Heading, Text, Stack, Avatar, Link } from '@chakra-ui/react'
import Logo from '../../../assets/img/logo.svg'
import { truncate, slugify } from '../../../utils'

const ArticleCard = ({ article }) => {
	return (
		<Center py={6}>
			<NextLink href={`/articles/${slugify(article?.title)}--${article?.id}`} passHref>
				<Link>
					<Box
						w={'full'}
						bg='brand.secondary'
						h={'200px'}
						boxShadow={'2xl'}
						rounded={'md'}
						display={'flex'}
						justifyContent={'space-between'}
						overflow={'hidden'}
						_hover={{ outline: '2px solid', outlineColor: 'brand.primary', cursor: 'pointer' }}
					>
						<Stack p={6} flex={'1'} display='flex' justifyContent={'space-between'}>
							<Heading color='white' fontSize={'2xl'} fontFamily={'body'}>
								{truncate(article?.title, 50) || ''}
							</Heading>
							<Text color='white'>{truncate(article?.description, 100) || ''}</Text>
							<Text color='gray.300'>
								{article?.read_time || '5'} min read -{' '}
								{dayjs(article?.published_at).format('MMM DD, YYYY')}
							</Text>
						</Stack>
						<Box
							h={'250px'}
							mt={-6}
							mb={6}
							pos={'relative'}
							w={'200px'}
							borderBottom={'1px solid'}
							borderBottomColor={'gray.600'}
						>
							<Image
								src={article?.thumbnail_url || Logo}
								layout={'fill'}
								alt='Article Image'
								objectFit='cover'
							/>
						</Box>
					</Box>
				</Link>
			</NextLink>
		</Center>
	)
}

export default ArticleCard
