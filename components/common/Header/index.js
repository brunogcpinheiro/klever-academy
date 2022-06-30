import {
	Box,
	Flex,
	Text,
	IconButton,
	Button,
	Stack,
	Collapse,
	Link,
	useColorModeValue,
	useDisclosure,
	Tooltip,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, SunIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Logo from '../../../assets/img/logo.svg'
import BrazilImage from '../../../assets/img/brazil.webp'
import USAImage from '../../../assets/img/usa.webp'
import { useAuth } from '../../../context/Auth'
import { useEffect } from 'react'
import { logoutUser, refreshLogin } from '../../../services/users'
import toast from 'react-hot-toast'
import NextLink from 'next/link'

const Header = () => {
	const router = useRouter()
	const { isOpen, onToggle } = useDisclosure()
	const { user, setUser } = useAuth()

	const handleLogout = async () => {
		try {
			await logoutUser(localStorage.getItem('klever-academy:token'))
			setUser({})
			localStorage.removeItem('klever-academy:token')
			router.push('/')
			toast.success('Logged out successfully!')
		} catch (error) {
			toast.error('Something went wrong to logout user!')
		}
	}

	useEffect(() => {
		if (localStorage.getItem('klever-academy:token')) {
			const ref = async () => {
				const r = await refreshLogin(localStorage.getItem('klever-academy:token'))
				if (r?.response?.status === 401) {
					localStorage.removeItem('klever-academy:token')
					setUser({})
					router.push('/login')
					return toast('Session expired! Please login again!')
				}

				setUser({ ...r?.data?.userInfo })
				if (location.pathname === '/login') router.push('/')
				return r
			}
			ref()
		} else {
			return setUser({})
		}
	}, [router, setUser])

	return (
		<Box>
			<Flex bgColor='brand.background' color='white' minH='60px' p='10px 0' align='center'>
				<Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
					<IconButton
						onClick={onToggle}
						icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
						variant={'ghost'}
						aria-label={'Toggle Navigation'}
					/>
				</Flex>
				<Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
					<NextLink href='/' passHref>
						<Link>
							<Box cursor='pointer'>
								<Image mt='-5px' width='150px' alt='Klever Academy Logo' src={Logo} />
							</Box>
						</Link>
					</NextLink>

					<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
						<DesktopNav />
					</Flex>
				</Flex>

				<Stack justify='flex-end' direction='row' alignItems='center' spacing={6}>
					<Box display='flex' alignItems='center' w='70px'>
						<Tooltip label='EN-US'>
							<Box cursor='pointer' mx={1} mt={1}>
								<Image w='20px' src={USAImage} alt='en-us' />
							</Box>
						</Tooltip>
						<Tooltip label='PT-BR (Coming soon)'>
							<Box mx={1} mt={1} cursor={'not-allowed'}>
								<Image w='20px' src={BrazilImage} alt='pt-br' />
							</Box>
						</Tooltip>
					</Box>
					<Tooltip label='Light Theme (Coming soon)'>
						<SunIcon fontSize='lg' cursor='not-allowed' />
					</Tooltip>
					{user && Object.keys(user).length === 0 ? (
						<>
							<NextLink href='/login' passHref>
								<Link
									display={{ base: 'none', md: 'inline-flex' }}
									fontSize='sm'
									fontWeight={600}
									size='sm'
									color='white'
									bg='brand.primary'
									px={2}
									py={1}
									borderRadius='sm'
									_hover={{
										opacity: 0.8,
									}}
								>
									Log in
								</Link>
							</NextLink>
							<NextLink href='/signup' passHref>
								<Link
									variant='link'
									color='white'
									fontWeight='bold'
									fontSize='sm'
									_hover={{ textDecoration: 'none', opacity: 0.8 }}
								>
									Sign up
								</Link>
							</NextLink>
						</>
					) : (
						<Box display='flex' alignItems='center'>
							<Text fontWeight='bold'>Hello, {user?.firstName || '...'}!</Text>
							<Button
								size='xs'
								ml={4}
								bgColor='brand.primary'
								_hover={{ opacity: 0.8 }}
								onClick={handleLogout}
							>
								Logout
							</Button>
						</Box>
					)}
				</Stack>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	)
}

const DesktopNav = () => {
	const linkColor = 'white'
	const linkHoverColor = 'gray.200'

	return (
		<Stack direction={'row'} spacing={4}>
			{NAV_ITEMS.map(navItem => (
				<Box key={navItem.label}>
					<NextLink href={navItem?.href} passHref>
						<Link>
							<Text
								p={2}
								fontSize={'sm'}
								fontWeight={700}
								color={linkColor}
								textTransform='uppercase'
								cursor='pointer'
								_hover={{
									textDecoration: 'none',
									color: linkHoverColor,
								}}
							>
								{navItem.label}
							</Text>
						</Link>
					</NextLink>
				</Box>
			))}
			<Box>
				<Tooltip placement='bottom' label='Coming Soon'>
					<Text
						p={2}
						fontSize={'sm'}
						fontWeight={700}
						color={linkColor}
						textTransform='uppercase'
						_hover={{
							textDecoration: 'none',
							color: linkHoverColor,
							cursor: 'not-allowed',
						}}
					>
						Courses
					</Text>
				</Tooltip>
			</Box>
		</Stack>
	)
}

const MobileNav = () => {
	return (
		<Stack bg='white' p={4} display={{ md: 'none' }}>
			{NAV_ITEMS.map(navItem => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
		</Stack>
	)
}

const MobileNavItem = ({ label, children, href }) => {
	const { isOpen, onToggle } = useDisclosure()

	return (
		<Stack spacing={4} onClick={onToggle}>
			<Flex
				py={2}
				as={Link}
				href={href}
				justify={'space-between'}
				align={'center'}
				_hover={{
					textDecoration: 'none',
				}}
			>
				<Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
					{label}
				</Text>
			</Flex>
		</Stack>
	)
}

const NAV_ITEMS = [
	{
		label: 'Explore',
		href: '/explore',
	},
	{
		label: 'Videos',
		href: '/videos',
	},
	{
		label: 'Articles',
		href: '/articles',
	},
]

export default Header
