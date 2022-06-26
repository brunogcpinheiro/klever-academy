import { Box, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Main from '../layouts/Main'
import NotFoundImage from '../assets/img/page-not-found.png'
import Image from 'next/image'

export default function NotFound() {
	return (
		<Box bgColor='brand.background'>
			<Head>
				<title>Klever Academy</title>
				<meta name='description' content='Generated by Klever Academy' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Main>
				<Box
					h='calc(100vh - 305px)'
					display='flex'
					alignItems='center'
					justifyContent='center'
					flexDirection='column'
				>
					<Image width='256px' height='256px' src={NotFoundImage} alt='Not Found' />
					<Text color='white' textTransform='uppercase' fontSize='2xl' fontWeight='bold'>
						Page Not Found
					</Text>
				</Box>
			</Main>
		</Box>
	)
}
