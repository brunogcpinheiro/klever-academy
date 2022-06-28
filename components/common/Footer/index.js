import { Box, chakra, Container, Link, Stack, Text, useColorModeValue, VisuallyHidden } from '@chakra-ui/react'
import Image from 'next/image'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import Logo from '../../../assets/img/logo.svg'

const SocialButton = ({ children, label, href }) => {
	return (
		<chakra.button
			bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
			rounded={'full'}
			w={8}
			h={8}
			cursor={'pointer'}
			as={'a'}
			href={href}
			display={'inline-flex'}
			alignItems={'center'}
			justifyContent={'center'}
			transition={'background 0.3s ease'}
			target={'_blank'}
			_hover={{
				bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
			}}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	)
}

const Footer = () => {
	return (
		<Box
			borderTopWidth={1}
			borderStyle={'dotted'}
			borderColor={useColorModeValue('gray.600', 'gray.700')}
			bg='brand.background'
			color='white'
		>
			<Container as={Stack} maxW={'6xl'} py={4} spacing={4} justify={'center'} align={'center'}>
				<Image src={Logo} alt='Klever Logo' />
				<Stack direction={'row'} spacing={6}>
					<Link href='/'>Home</Link>
					<Link href='/explore'>Explore</Link>
					<Link href='/videos'>Videos</Link>
					<Link href='/articles'>Articles</Link>
				</Stack>
			</Container>

			<Box>
				<Container
					as={Stack}
					maxW={'6xl'}
					py={4}
					direction={{ base: 'column', md: 'row' }}
					spacing={4}
					justify={{ base: 'center', md: 'space-between' }}
					align={{ base: 'center', md: 'center' }}
				>
					<Text>© {new Date().getFullYear()} Klever. All rights reserved</Text>
					<Stack direction={'row'} spacing={6}>
						<SocialButton label={'Twitter'} href={'https://twitter.com/klever_io'}>
							<FaTwitter />
						</SocialButton>
						<SocialButton label={'YouTube'} href={'https://www.youtube.com/c/KleverFinance'}>
							<FaYoutube />
						</SocialButton>
						<SocialButton label={'Instagram'} href={'https://www.instagram.com/klever.io'}>
							<FaInstagram />
						</SocialButton>
					</Stack>
				</Container>
			</Box>
		</Box>
	)
}

export default Footer
