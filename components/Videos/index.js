import { Flex, SimpleGrid, Text } from '@chakra-ui/react'
import VideoCard from './VideoCard'

const Videos = ({ videos }) => {
	return (
		<Flex direction='column' mt={10}>
			<Text color='white' fontSize='5xl' fontWeight='bold'>
				All Posted Videos
			</Text>
			<SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
				{videos && videos.map(video => <VideoCard key={video?.id} video={video} />)}
			</SimpleGrid>
		</Flex>
	)
}

export default Videos
