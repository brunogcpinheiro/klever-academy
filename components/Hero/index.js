import { Box, Link, Stack, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import LearningImage from '../../assets/img/learning.svg'
import BitcoinImage from '../../assets/img/bitcoin.svg'

export const useBetterMediaQuery = mediaQueryString => {
	const [matches, setMatches] = useState(null)

	useEffect(() => {
		const mediaQueryList = window.matchMedia(mediaQueryString)
		const listener = () => setMatches(!!mediaQueryList.matches)
		listener()
		mediaQueryList.addListener(listener)
		return () => mediaQueryList.removeListener(listener)
	}, [mediaQueryString])

	return matches
}

const Hero = () => {
	const isLargerThan481 = useBetterMediaQuery('(min-width: 481px)')

	return (
		<Box
			w='100%'
			mt={[0, 6, 14, 14]}
			minH='550px'
			display='flex'
			flexDirection={'column'}
			alignItems='center'
			justifyContent='space-around'
			px={16}
		>
			<Box alignItems='center' textAlign={'center'}>
				<Stack spacing={6} alignItems={'center'}>
					<Text
						fontWeight='bold'
						lineHeight='shorter'
						color='white'
						as='h2'
						fontSize={{ base: '2xl', sm: '3xl', md: '5xl', lg: '6xl' }}
					>
						All You Need To Know About <Text color='brand.primary'>Crypto and Klever World</Text>
					</Text>
					<Box
						fontSize={{ base: 'sm', sm: 'md', md: 'lg', lg: 'lg' }}
						color='white'
						w={{ base: 'xs', sm: 'md', md: '3xl', lg: '3xl' }}
						textAlign={'center'}
					>
						<Text display={'inline'}>
							Here you will find everything to stay on top of the cryptocurrency world and the entire
							Klever ecosystem. And best of all, you can earn
						</Text>{' '}
						<Text display={'inline'} fontWeight={'bold'} color='brand.primary'>
							KLV
						</Text>{' '}
						for it!
					</Box>
					<Stack spacing={4} alignItems={'center'}>
						<NextLink href='/explore' passHref>
							<Link
								rounded='sm'
								bg='brand.primary'
								fontWeight='bold'
								textTransform='uppercase'
								px={4}
								py={2}
								w='fit-content'
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
			{isLargerThan481 && (
				<Box mt={10} w='full' display={'flex'} justifyContent={'space-around'}>
					<Box display={['none', 'none', 'block', 'block']} position={'relative'} w={'sm'}>
						<Image alt='Hero Image' src={BitcoinImage} />
					</Box>

					<Box display={['none', 'block', 'block', 'block']} position={'relative'} w={'sm'}>
						<Image alt='Hero Image' src={LearningImage} />
					</Box>
				</Box>
			)}
		</Box>
	)
}

export default Hero
