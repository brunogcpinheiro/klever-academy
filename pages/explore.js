import { Box, Stack, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Main from '../layouts/Main'
import SearchHeader from '../components/SearchHeader'
import ExploreContent from '../components/ExploreContent'
import { Loader } from '../components/common/Loader'
import { useGetAllArticles } from '../hooks/articles/useGetAllArticles'
import { useGetAllVideos } from '../hooks/videos/useGetAllVideos'

export default function Explore() {
	const { isLoadingVideos, videos } = useGetAllVideos()
	const { isLoadingArticles, articles } = useGetAllArticles()
	const [resources, setResources] = useState([])
	const [filter, setFilter] = useState('All')
	const [search, setSearch] = useState('')

	useEffect(() => {
		if (articles && videos) {
			const articlesType = articles.map(article => ({
				...article,
				type: 'Article',
				path: 'articles',
			}))
			const videosType = videos.map(video => ({
				...video,
				type: 'Video',
				path: 'videos',
			}))
			const resources = [...articlesType, ...videosType]
			const sortedByDate = resources.sort((a, b) => b?.published_at - a?.published_at)
			const filteredResources = sortedByDate.filter(resource => {
				return resource.type === filter
			})
			setResources(filter === 'All' ? sortedByDate : filteredResources)
		}
	}, [articles, filter, search, videos])

	const handleSearch = () => {
		const searched = resources.filter(resource => {
			return resource?.title?.toLowerCase().includes(search?.toLowerCase())
		})
		setResources(searched)
	}

	return (
		<Box bgColor='brand.background'>
			<Head>
				<title>Klever Academy | Explore</title>
				<meta name='description' content='Generated by Klever Academy' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Main>
				<Stack mt={12}>
					<Text fontSize={'5xl'} color='white' fontWeight={'bold'}>
						Explore Content
					</Text>
					<SearchHeader
						filter={filter}
						setFilter={setFilter}
						setSearch={setSearch}
						handleSearch={handleSearch}
					/>
					{!isLoadingVideos || !isLoadingArticles ? (
						<ExploreContent resources={resources} />
					) : (
						<Box h='calc(100vh - 521px)' display={'flex'} alignItems={'center'} justifyContent={'center'}>
							<Loader />
						</Box>
					)}
				</Stack>
			</Main>
		</Box>
	)
}
