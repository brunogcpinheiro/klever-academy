import { Box } from '@chakra-ui/react'
import Header from '../components/common/Header'

const Main = ({ children }) => {
	return (
		<Box maxW='1440px' margin='0 auto' paddingBottom={20}>
			<Header />
			<Box as='main' bgColor='brand.background' w='100%' m='0 auto'>
				{children}
			</Box>
		</Box>
	)
}

export default Main
