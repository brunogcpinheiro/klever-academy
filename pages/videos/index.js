import { Box, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Main from '../../layouts/Main'
import Videos from '../../components/Videos'
import { useGetAllVideos } from '../../hooks/videos/useGetAllVideos'
import { Loader } from '../../components/common/Loader'

const VideosPage = () => {
	const { videos, isLoading } = useGetAllVideos()

	return (
		<Box bgColor='brand.background'>
			<Head>
				<title>Klever Academy</title>
				<meta name='description' content='Generated by Klever Academy' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Main>
				{isLoading ? (
					<Box h='calc(100vh - 305px)' display={'flex'} alignItems={'center'} justifyContent={'center'}>
						<Loader />
					</Box>
				) : (
					<Videos videos={videos} />
				)}
			</Main>
		</Box>
	)
}

export default VideosPage
