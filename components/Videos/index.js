import { Flex, SimpleGrid, Text } from '@chakra-ui/react'
import VideoCard from './VideoCard'

const Videos = ({ videos }) => {
	return (
		<Flex direction='column' mt={10}>
			<Text color='white' fontSize='5xl' fontWeight='bold'>
				All Posted Videos
			</Text>
			<SimpleGrid
				alignItems={'center'}
				justifyContent={['center', 'center', 'center', 'center', 'space-between']}
				templateColumns={'repeat(auto-fill, minmax(min-content, 400px))'}
				spacing={10}
			>
				{videos && videos.map(video => <VideoCard key={video?.id} video={video} />)}
			</SimpleGrid>
		</Flex>
	)
}

export default Videos
