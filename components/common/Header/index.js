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
	Icon,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, SunIcon, ChevronDownIcon } from '@chakra-ui/icons'
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
			<Flex
				bgColor='brand.background'
				color='white'
				minH='60px'
				p='10px 0'
				align='center'
				justifyContent={'space-between'}
			>
				<Flex ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
					<IconButton
						onClick={onToggle}
						icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
						variant={'ghost'}
						aria-label={'Toggle Navigation'}
					/>
				</Flex>
				<Flex align-self={'flex-end'}>
					<NextLink href='/' passHref>
						<Link>
							<Box cursor='pointer' ml={30}>
								<Image mt='-5px' width='150px' alt='Klever Academy Logo' src={Logo} />
							</Box>
						</Link>
					</NextLink>

					<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
						<DesktopNav />
					</Flex>
				</Flex>

				<Stack justify='flex-end' direction='row' alignItems='center'>
					<Box display={['none', 'none', 'none', 'none', 'flex']} alignItems='center' w='70px'>
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
					<Box display={['none', 'none', 'none', 'none', 'flex']}>
						<Tooltip label='Light Theme (Coming soon)'>
							<SunIcon fontSize='lg' cursor='not-allowed' />
						</Tooltip>
					</Box>
					{user && Object.keys(user).length === 0 ? (
						<>
							<NextLink href='/login' passHref>
								<Link
									display={'inline-flex'}
									fontSize={['xs', 'xs', 'sm']}
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
									fontSize={['xs', 'xs', 'sm']}
									_hover={{ textDecoration: 'none', opacity: 0.8 }}
								>
									Sign up
								</Link>
							</NextLink>
						</>
					) : (
						<Box display='flex' alignItems='center'>
							<Text display={['none', 'none', 'none', 'flex', 'flex']} fontWeight='bold' ml={2} mr={4}>
								Hello, {user?.firstName || '...'}!
							</Text>
							<Button size='xs' bgColor='brand.primary' _hover={{ opacity: 0.8 }} onClick={handleLogout}>
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
		<Stack direction={'row'} spacing={2}>
			{NAV_ITEMS.map(navItem => (
				<Box key={navItem.label}>
					<NextLink href={navItem?.href} passHref>
						<Link isExternal={navItem?.external}>
							<Text
								p={2}
								fontSize={['xx-small', 'xx-small', 'xx-small', 'xx-small', 'xs']}
								fontWeight={500}
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
						fontSize={['xx-small', 'xx-small', 'xx-small', 'xx-small', 'xs']}
						fontWeight={500}
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
		<Stack bg='brand.secondary' border='2px solid' borderColor={'brand.accent'} p={4} display={{ md: 'none' }}>
			{NAV_ITEMS.map(navItem => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
		</Stack>
	)
}

const MobileNavItem = ({ label, href }) => {
	return (
		<Stack spacing={4} bg='brand.secondary' alignItems={'center'}>
			<Flex
				py={2}
				as={Link}
				href={href ?? '#'}
				justify={'space-between'}
				align={'center'}
				_hover={{
					textDecoration: 'none',
				}}
			>
				<Text color='white' fontWeight={600}>
					{label}
				</Text>
			</Flex>
		</Stack>
	)
}

const NAV_ITEMS = [
	{
		label: 'About Klever',
		href: 'https://klever.finance/',
		external: true,
	},
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
