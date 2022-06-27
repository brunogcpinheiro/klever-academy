import dayjs from 'dayjs'
import { useQuery } from 'react-query'
import { getAllVideos } from '../../services/videos'

export const useGetAllVideos = () => {
	const { isLoading, data } = useQuery('allVideos', getAllVideos)
	const sortedDataByDate = data?.sort((a, b) => dayjs(b.published_at) - dayjs(a.published_at))

	const featuredVideos = sortedDataByDate?.filter(video => video?.isFeatured)

	return {
		videos: sortedDataByDate,
		featuredVideos,
		isLoading,
	}
}
