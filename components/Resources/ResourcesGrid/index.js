import { Box, Grid, Stack } from '@chakra-ui/react'
import ResourceCard from '../ResourceCard'

const ResourcesGrid = () => {
	const resource = {
		title: 'Introduction to Blockchain',
		viewers: '2.5k',
	}

	return (
		<Grid templateColumns='repeat(6, 1fr)' gap={4}>
			{Array.from({ length: 18 }, (_, i) => (
				<ResourceCard key={i} {...resource} />
			))}
		</Grid>
	)
}

export default ResourcesGrid
