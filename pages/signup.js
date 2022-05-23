import Image from 'next/image'
import { Box, Button, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text } from '@chakra-ui/react'
import Auth from '../layouts/Auth'
import Logo from '../assets/img/logo.svg'
import Head from 'next/head'
import { FiLock, FiUser } from 'react-icons/fi'
import { MdOutlineEmail } from 'react-icons/md'
import { useState } from 'react'

const Signup = () => {
	const [show, setShow] = useState(false)
	const handleClick = () => setShow(!show)

	return (
		<Box bgColor='brand.background'>
			<Head>
				<title>Klever Academy | Sign Up</title>
				<meta name='description' content='Generated by Klever Academy' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Auth>
				<Box
					maxW='700px'
					h='100%'
					w='100%'
					m='0 auto'
					display='flex'
					alignItems='center'
					justifyContent='center'
				>
					<Stack
						alignItems='center'
						spacing={4}
						borderWidth={2}
						borderColor='brand.secondary'
						borderStyle='dotted'
						borderRadius='lg'
						boxShadow='dark-lg'
						p={10}
					>
						<Image width='400px' height='50px' alt='Klever Academy Logo' src={Logo} />
						<Text fontSize='xl' fontWeight='bold' color='gray.200'>
							Sign Up
						</Text>
						<InputGroup>
							<InputLeftElement pointerEvents='none'>
								<FiUser color='white' />
							</InputLeftElement>
							<Input type='text' placeholder='First Name' />
						</InputGroup>

						<InputGroup>
							<InputLeftElement pointerEvents='none'>
								<FiUser color='white' />
							</InputLeftElement>
							<Input type='text' placeholder='Last Name' />
						</InputGroup>

						<InputGroup>
							<InputLeftElement pointerEvents='none'>
								<MdOutlineEmail color='white' />
							</InputLeftElement>
							<Input type='text' placeholder='E-mail' />
						</InputGroup>

						<InputGroup size='md'>
							<InputLeftElement pointerEvents='none'>
								<FiLock color='white' />
							</InputLeftElement>
							<Input pr='4.5rem' type={show ? 'text' : 'password'} placeholder='Enter password' />
							<InputRightElement width='4.5rem'>
								<Button variant='link' h='1.75rem' size='sm' onClick={handleClick}>
									{show ? 'Hide' : 'Show'}
								</Button>
							</InputRightElement>
						</InputGroup>

						<Box w='100%'>
							<Button
								bgColor='brand.primary'
								color='white'
								textTransform='uppercase'
								w='100%'
								_hover={{ opacity: 0.8 }}
							>
								Sign Up
							</Button>
						</Box>
					</Stack>
				</Box>
			</Auth>
		</Box>
	)
}

export default Signup
