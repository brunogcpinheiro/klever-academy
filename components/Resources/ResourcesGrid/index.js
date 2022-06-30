import { Box, Grid } from '@chakra-ui/react'
import ResourceCard from '../ResourceCard'
import { useGetAllVideos } from '../../../hooks/videos/useGetAllVideos'
import { Loader } from '../../common/Loader'
import { useGetAllArticles } from '../../../hooks/articles/useGetAllArticles'

const ResourcesGrid = () => {
	const { isLoadingVideos, featuredVideos } = useGetAllVideos()
	const { isLoadingArticles, featuredArticles } = useGetAllArticles()

	return (
		<>
			{isLoadingVideos || isLoadingArticles ? (
				<Box w='full' display='flex' alignItems='center' justifyContent='center'>
					<Loader />
				</Box>
			) : (
				<Grid
					templateColumns='repeat(auto-fill, minmax(250px, 220px))'
					gap={4}
					alignItems={'center'}
					justifyContent={['center', 'center', 'center', 'center', 'space-between']}
				>
					{featuredVideos?.map(video => (
						<ResourceCard key={video?.id} type='video' {...video} />
					))}
					{featuredArticles?.map(article => (
						<ResourceCard key={article?.id} type='article' {...article} />
					))}
				</Grid>
			)}
		</>
	)
}

export default ResourcesGrid
