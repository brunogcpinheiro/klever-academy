import { Box, Text } from '@chakra-ui/react'

export const Loader = () => (
	<Box>
		<Text as='span' className='loader' />
		<Text color='white'>Loading...</Text>
	</Box>
)
