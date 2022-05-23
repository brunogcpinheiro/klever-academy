import { Box } from '@chakra-ui/react'
import Header from '../components/common/Header'

const Auth = ({ children }) => {
	return (
		<Box margin='0 auto' maxW='1440px' paddingBottom={20} h='100vh'>
			<Header />
			<Box as='section' bgColor='brand.background' w='100%' h='100%' m='0 auto'>
				{children}
			</Box>
		</Box>
	)
}

export default Auth
