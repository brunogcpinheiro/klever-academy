import { Box, Button, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import LearningImage from '../../assets/img/learning.svg'

const Hero = () => {
	return (
		<Box
			w='100%'
			minH='calc(100vh - 60px)'
			display='flex'
			alignItems='center'
			justifyContent='space-around'
			px={16}
		>
			<Box alignItems='center'>
				<Stack spacing={6} w='3xl'>
					<Text
						fontWeight='bold'
						lineHeight='shorter'
						color='white'
						as='h2'
						fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
					>
						All You Need To Know About Crypto World
					</Text>
					<Text fontSize='sm' color='white'>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industrys standard dummy text.
					</Text>
					<Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
						<Button
							rounded='sm'
							bg='brand.primary'
							color='white'
							_hover={{
								opacity: 0.8,
							}}
						>
							Explore
						</Button>
					</Stack>
				</Stack>
			</Box>
			<Box>
				<Box w='2xl'>
					<Image alt='Hero Image' objectFit='cover' src={LearningImage} />
				</Box>
			</Box>
		</Box>
	)
}

export default Hero
