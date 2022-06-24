import { Box, Grid, Stack } from '@chakra-ui/react'
import { useEffect } from 'react'
import ResourceCard from '../ResourceCard'
import { useGetAllVideos } from '../../../hooks/useGetAllVideos'

const ResourcesGrid = () => {
	const { videos } = useGetAllVideos()

	return (
		<Grid templateColumns='repeat(6, 1fr)' gap={4}>
			{videos && videos.map(video => <ResourceCard key={video.id} {...video} />)}
		</Grid>
	)
}

export default ResourcesGrid
