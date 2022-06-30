import { Box, Link, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import LearningImage from '../../assets/img/learning.svg'

const Hero = () => {
	return (
		<Box w='100%' minH='550px' display='flex' alignItems='center' justifyContent='space-around' px={16}>
			<Box alignItems='center'>
				<Stack spacing={6} w='3xl'>
					<Text
						fontWeight='bold'
						lineHeight='shorter'
						color='white'
						as='h2'
						fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
					>
						All You Need To Know About Crypto and Klever World
					</Text>
					<Text fontSize='sm' color='white'>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industrys standard dummy text.
					</Text>
					<Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
						<NextLink href='/explore' passHref>
							<Link
								rounded='sm'
								bg='brand.primary'
								fontWeight='bold'
								textTransform='uppercase'
								px={4}
								py={2}
								color='white'
								_hover={{
									opacity: 0.8,
								}}
							>
								Explore
							</Link>
						</NextLink>
					</Stack>
				</Stack>
			</Box>
			<Box>
				<Box w='xl'>
					<Image alt='Hero Image' objectFit='cover' src={LearningImage} />
				</Box>
			</Box>
		</Box>
	)
}

export default Hero
