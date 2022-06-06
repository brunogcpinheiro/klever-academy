import {
	Box,
	Flex,
	Text,
	IconButton,
	Button,
	Stack,
	Collapse,
	Icon,
	Link,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
	useDisclosure,
	Tooltip,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon, SunIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Logo from '../../../assets/img/logo.svg'
import BrazilImage from '../../../assets/img/brazil.png'
import USAImage from '../../../assets/img/usa.png'
import { useAuth } from '../../../context/Auth'
import { useEffect } from 'react'
import { refreshLogin } from '../../../services/users'
import toast from 'react-hot-toast'

const Header = () => {
	const router = useRouter()
	const { isOpen, onToggle } = useDisclosure()
	const { user, setUser } = useAuth()

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
					<Link href='/' mt='-5px'>
						<Image width='150px' alt='Klever Academy Logo' src={Logo} />
					</Link>

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
						<Tooltip label='PT-BR'>
							<Box cursor='pointer' mx={1} mt={1}>
								<Image w='20px' src={BrazilImage} alt='pt-br' />
							</Box>
						</Tooltip>
					</Box>
					<SunIcon fontSize='lg' cursor='pointer' />
					{Object.keys(user).length === 0 ? (
						<>
							<Link href='/login'>
								<Button
									display={{ base: 'none', md: 'inline-flex' }}
									fontSize='sm'
									fontWeight={600}
									size='sm'
									color='white'
									bg='brand.primary'
									href='#'
									borderRadius='sm'
									_hover={{
										opacity: 0.8,
									}}
								>
									Log in
								</Button>
							</Link>
							<Link href='/signup'>
								<Button
									variant='link'
									color='white'
									fontWeight='bold'
									fontSize='sm'
									_hover={{ textDecoration: 'none', opacity: 0.8 }}
								>
									Sign up
								</Button>
							</Link>
						</>
					) : (
						<Box display='flex' alignItems='center'>
							<Text fontWeight='bold'>Hello, {user?.firstName || '...'}!</Text>
							<Button size='xs' ml={4} bgColor='brand.primary' _hover={{ opacity: 0.8 }}>
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
	const popoverContentBgColor = 'brand.secondary'

	return (
		<Stack direction={'row'} spacing={4}>
			{NAV_ITEMS.map(navItem => (
				<Box key={navItem.label}>
					<Popover trigger={'hover'} placement={'bottom-start'}>
						<PopoverTrigger>
							<Link
								p={2}
								href={navItem.href ?? '#'}
								fontSize={'sm'}
								fontWeight={700}
								color={linkColor}
								textTransform='uppercase'
								_hover={{
									textDecoration: 'none',
									color: linkHoverColor,
								}}
							>
								{navItem.label}
							</Link>
						</PopoverTrigger>

						{navItem.children && (
							<PopoverContent
								border={0}
								boxShadow={'xl'}
								bg={popoverContentBgColor}
								p={4}
								rounded={'xl'}
								minW={'sm'}
							>
								<Stack>
									{navItem.children.map(child => (
										<DesktopSubNav key={child.label} {...child} />
									))}
								</Stack>
							</PopoverContent>
						)}
					</Popover>
				</Box>
			))}
			<Box>
				<Tooltip placement='bottom' label='Coming Soon'>
					<Link
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
					</Link>
				</Tooltip>
			</Box>
		</Stack>
	)
}

const DesktopSubNav = ({ label, href, subLabel }) => {
	return (
		<Link href={href} role={'group'} display={'block'} p={2} rounded={'md'} _hover={{ opacity: 0.8 }}>
			<Stack direction={'row'} align={'center'}>
				<Box>
					<Text transition={'all .3s ease'} _groupHover={{ color: 'brand.primary' }} fontWeight={500}>
						{label}
					</Text>
					<Text fontSize={'sm'}>{subLabel}</Text>
				</Box>
				<Flex
					transition={'all .3s ease'}
					transform={'translateX(-10px)'}
					opacity={0}
					_groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
					justify={'flex-end'}
					align={'center'}
					flex={1}
				>
					<Icon color={'brand.primary'} w={5} h={5} as={ChevronRightIcon} />
				</Flex>
			</Stack>
		</Link>
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
		<Stack spacing={4} onClick={children && onToggle}>
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
				<Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
					{label}
				</Text>
				{children && (
					<Icon
						as={ChevronDownIcon}
						transition={'all .25s ease-in-out'}
						transform={isOpen ? 'rotate(180deg)' : ''}
						w={6}
						h={6}
					/>
				)}
			</Flex>

			<Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
				<Stack
					mt={2}
					pl={4}
					borderLeft={1}
					borderStyle={'solid'}
					borderColor={useColorModeValue('gray.200', 'gray.700')}
					align={'start'}
				>
					{children &&
						children.map(child => (
							<Link key={child.label} py={2} href={child.href}>
								{child.label}
							</Link>
						))}
				</Stack>
			</Collapse>
		</Stack>
	)
}

const NAV_ITEMS = [
	{
		label: 'Videos',
		children: [
			{
				label: 'Job Board',
				subLabel: 'Find your dream design job',
				href: '#',
			},
			{
				label: 'Freelance Projects',
				subLabel: 'An exclusive list for contract work',
				href: '#',
			},
		],
	},
	{
		label: 'Articles',
		href: '#',
	},
]

export default Header
