import Image from 'next/image'
import NextLink from 'next/link'
import { Box, Center, Heading, Text, Stack, Avatar, Link } from '@chakra-ui/react'
import Logo from '../../../assets/img/logo.svg'
import { truncate, slugify } from '../../../utils'

const VideoCard = ({ video }) => {
	console.log(video)
	return (
		<Center py={6}>
			<NextLink href={`/videos/${slugify(video?.title)}--${video?.id}`} passHref>
				<Link>
					<Box
						maxW={'445px'}
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
							<Image src={video?.thumbnail_url || Logo} layout={'fill'} alt='' />
						</Box>
						<Stack p={6} flex={'1'}>
							<Heading color='white' fontSize={'2xl'} fontFamily={'body'}>
								{video?.title || ''}
							</Heading>
							<Text color='white'>{truncate(video?.description, 200) || ''}</Text>
						</Stack>
						<Stack direction={'row'} spacing={4} align={'center'} p={6}>
							<Avatar bg={'white'} src={'/img/klever.webp'} alt={'Author'} />
							<Stack direction={'column'} spacing={0} fontSize={'sm'}>
								<Text fontWeight={600} color='gray.300'>
									Klever
								</Text>
								<Text color='white'>Feb 08, 2021</Text>
							</Stack>
						</Stack>
					</Box>
				</Link>
			</NextLink>
		</Center>
	)
}

export default VideoCard
