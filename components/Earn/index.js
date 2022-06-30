import { Box, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image'
import { MdOutlineAttachMoney } from 'react-icons/md'
import EarnImage from '../../assets/img/earn.svg'

const Earn = () => {
	return (
		<Box
			w='100%'
			bgColor='brand.secondary'
			mt={10}
			borderRadius='sm'
			px={10}
			py={4}
			display='flex'
			alignItems='center'
			justifyContent='space-between'
		>
			<Box>
				<Text
					fontWeight='bold'
					fontSize={{ base: 'xl', sm: '3xl', md: '3xl', lg: '3xl' }}
					color='white'
					textAlign={['center', 'center', 'center', 'left']}
				>
					Earn cryptocurrencies learning about blockchain
				</Text>
				<Text
					fontWeight='bold'
					fontSize={{ base: 'lg', sm: 'xl', md: 'xl', lg: 'xl' }}
					color='white'
					textAlign={['center', 'center', 'center', 'left']}
				>
					Build your blockchain knowledge, complete quizzes and earn free cryptocurrencies.
				</Text>
				<Box display={'flex'} justifyContent={['center', 'center', 'center', 'flex-start']}>
					<NextLink href='/earn' passHref>
						<Link
							mt={6}
							bgColor='brand.primary'
							color='white'
							textTransform='uppercase'
							fontWeight='bold'
							px={4}
							py={2}
							display='flex'
							borderRadius='sm'
							w='fit-content'
							_hover={{ opacity: 0.8 }}
						>
							<MdOutlineAttachMoney size={20} />
							Earn Now
						</Link>
					</NextLink>
				</Box>
			</Box>
			<Box display={['none', 'none', 'none', 'block']} position={'relative'} w='300px'>
				<Image src={EarnImage} alt='Earn' />
			</Box>
		</Box>
	)
}

export default Earn
