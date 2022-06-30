import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import ExploreContentCard from './ExploreContentCard'

const ExploreContent = ({ resources }) => {
	return (
		<Flex direction='column' mt={10}>
			<SimpleGrid
				alignItems={'center'}
				justifyContent={['center', 'center', 'center', 'center', 'space-between']}
				templateColumns={'repeat(auto-fill, minmax(min-content, 400px))'}
				spacing={10}
			>
				{resources.length !== 0 ? (
					resources.map(resource => (
						<ExploreContentCard key={`${resource?.id}-${resource?.type}`} resource={resource} />
					))
				) : (
					<Box h='calc(100vh - 521px)'>
						<Text fontSize={'2xl'} color='gray.200'>
							No content found!
						</Text>
					</Box>
				)}
			</SimpleGrid>
		</Flex>
	)
}

export default ExploreContent
