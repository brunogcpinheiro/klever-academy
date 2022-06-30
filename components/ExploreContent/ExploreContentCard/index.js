import Image from 'next/image'
import NextLink from 'next/link'
import dayjs from 'dayjs'
import { Box, Center, Heading, Text, Stack, Avatar, Link, Icon, Flex } from '@chakra-ui/react'
import Logo from '../../../assets/img/logo.svg'
import { truncate, slugify } from '../../../utils'
import { BiMovie } from 'react-icons/bi'
import { RiNewspaperLine } from 'react-icons/ri'

const ExploreContentCard = ({ resource }) => {
	return (
		<Center py={6}>
			<NextLink href={`/${resource?.path}/${slugify(resource?.title)}--${resource?.id}`} passHref>
				<Link>
					<Box
						w={'full'}
						bg='brand.secondary'
						h={'600px'}
						boxShadow={'2xl'}
						rounded={'md'}
						display={'flex'}
						flexDirection={'column'}
						justifyContent={'space-between'}
						overflow={'hidden'}
						_hover={{ outline: '2px solid', outlineColor: 'brand.primary', cursor: 'pointer' }}
					>
						<Box
							h={'250px'}
							bg={'transparent'}
							mt={-6}
							mb={6}
							w='full'
							pos={'relative'}
							borderBottom={'1px solid'}
							borderBottomColor={'gray.600'}
						>
							<Image src={resource?.thumbnail_url || Logo} layout={'fill'} alt='' />
						</Box>
						<Stack px={6} flex={'1'}>
							<Flex mb={2} alignItems='center'>
								<Icon
									as={resource?.type === 'Video' ? BiMovie : RiNewspaperLine}
									color='gray.300'
									boxSize={6}
								/>
								<Text fontWeight='bold' color='gray.300' ml={2}>
									{resource?.type}
								</Text>
							</Flex>
							<Heading color='white' fontSize={'2xl'} fontFamily={'body'}>
								{resource?.title || ''}
							</Heading>
							<Text color='white'>{truncate(resource?.description, 200) || ''}</Text>
						</Stack>
						<Stack direction={'row'} spacing={4} align={'center'} p={6}>
							<Avatar bg={'white'} src={'/img/klever.webp'} alt={'Author'} />
							<Stack direction={'column'} spacing={0} fontSize={'sm'}>
								<Text fontWeight={600} color='gray.300'>
									Klever
								</Text>
								<Text color='white'>{dayjs(resource?.published_at).format('MMM DD, YYYY')}</Text>
							</Stack>
						</Stack>
					</Box>
				</Link>
			</NextLink>
		</Center>
	)
}

export default ExploreContentCard
