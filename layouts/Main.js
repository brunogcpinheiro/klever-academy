import { Box } from '@chakra-ui/react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'

const Main = ({ children }) => {
	return (
		<Box maxW='1440px' margin='0 auto' px={10}>
			<Header />
			<Box as='main' bgColor='brand.background' w='100%' m='0 auto' mb={20}>
				{children}
			</Box>
			<Footer />
		</Box>
	)
}

export default Main
