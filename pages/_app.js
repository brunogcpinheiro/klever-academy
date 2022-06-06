import { ChakraProvider } from '@chakra-ui/react'
import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'
import { theme } from '../styles/theme'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import AuthProvider from '../context/Auth'
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider resetCSS theme={theme}>
				<AuthProvider>
					<Hydrate>
						<Component {...pageProps} />
					</Hydrate>
				</AuthProvider>
				<Toaster />
			</ChakraProvider>
		</QueryClientProvider>
	)
}

export default MyApp
