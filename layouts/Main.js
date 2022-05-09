import { Box } from '@chakra-ui/react'
import Header from '../components/common/Header'

const Main = ({ children }) => {
	return (
		<>
			<Header />
			<Box as='main' bgColor='brand.background' w='100%'>
				{children}
			</Box>
		</>
	)
}

export default Main
