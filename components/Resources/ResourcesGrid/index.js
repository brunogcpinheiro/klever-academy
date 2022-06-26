import { Box, Grid, Stack } from '@chakra-ui/react'
import { useEffect } from 'react'
import ResourceCard from '../ResourceCard'
import { useGetAllVideos } from '../../../hooks/videos/useGetAllVideos'
import { Loader } from '../../common/Loader'

const ResourcesGrid = () => {
	const { isLoading, featuredVideos } = useGetAllVideos()

	return (
		<>
			{isLoading ? (
				<Box w='full' display='flex' alignItems='center' justifyContent='center'>
					<Loader />
				</Box>
			) : (
				<Grid templateColumns='repeat(6, 1fr)' gap={4}>
					{featuredVideos.map(video => (
						<ResourceCard key={video.id} {...video} />
					))}
				</Grid>
			)}
		</>
	)
}

export default ResourcesGrid
