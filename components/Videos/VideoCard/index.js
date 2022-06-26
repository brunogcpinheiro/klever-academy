import Image from 'next/image'
import { Box, Center, Heading, Text, Stack, Avatar } from '@chakra-ui/react'
import Logo from '../../../assets/img/logo.svg'

const VideoCard = () => {
	return (
		<Center py={6}>
			<Box
				maxW={'445px'}
				w={'full'}
				bg='brand.secondary'
				boxShadow={'2xl'}
				rounded={'md'}
				p={6}
				overflow={'hidden'}
				_hover={{ outline: '2px solid', outlineColor: 'brand.primary', cursor: 'pointer' }}
			>
				<Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
					<Image src={Logo} layout={'fill'} alt='' />
				</Box>
				<Stack>
					<Text
						color={'brand.primary'}
						textTransform={'uppercase'}
						fontWeight={800}
						fontSize={'sm'}
						letterSpacing={1.1}
					>
						Blog
					</Text>
					<Heading color='white' fontSize={'2xl'} fontFamily={'body'}>
						Boost your conversion rate
					</Heading>
					<Text color='white'>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
						ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
						dolores et ea rebum.
					</Text>
				</Stack>
				<Stack mt={6} direction={'row'} spacing={4} align={'center'}>
					<Avatar
						bg={'white'}
						src={'https://s2.coinmarketcap.com/static/img/coins/200x200/6724.png'}
						alt={'Author'}
					/>
					<Stack direction={'column'} spacing={0} fontSize={'sm'}>
						<Text fontWeight={600} color='gray.300'>
							Klever
						</Text>
						<Text color='white'>Feb 08, 2021</Text>
					</Stack>
				</Stack>
			</Box>
		</Center>
	)
}

export default VideoCard
