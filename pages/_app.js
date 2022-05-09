import { ChakraProvider } from '@chakra-ui/react'
import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Component {...pageProps} />
			<Toaster />
		</ChakraProvider>
	)
}

export default MyApp
