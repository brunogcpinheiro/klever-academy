import { ChakraProvider } from '@chakra-ui/react'
import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'
import { theme } from '../styles/theme'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider resetCSS theme={theme}>
				<Component {...pageProps} />
				<Toaster />
			</ChakraProvider>
		</QueryClientProvider>
	)
}

export default MyApp
