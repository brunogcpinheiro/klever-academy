import { Container, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import VideoCard from './VideoCard'

const Videos = () => {
	return (
		<Flex direction='column' mt={10}>
			<Text color='white' fontSize='5xl' fontWeight='bold'>
				All Posted Videos
			</Text>
			<SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
				<VideoCard />
			</SimpleGrid>
		</Flex>
	)
}

export default Videos
