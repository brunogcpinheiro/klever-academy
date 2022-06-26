import { useQuery } from 'react-query'
import { getAllVideos } from '../../services/videos'

export const useGetAllVideos = () => {
	const { isLoading, data } = useQuery('allVideos', getAllVideos)
	const sortedDataById = data?.sort((a, b) => a.id - b.id)
	const sortedDataByRate = sortedDataById?.sort((a, b) => b.rate - a.rate)

	const featuredVideos = sortedDataByRate?.slice(0, 6)

	return {
		videos: sortedDataByRate,
		featuredVideos,
		isLoading,
	}
}
