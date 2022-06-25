import { useQuery } from 'react-query'
import { getAllVideos } from '../../services/videos'

export const useGetAllVideos = () => {
	const { isLoading, data } = useQuery('allVideos', getAllVideos)
	const sortedData = data?.sort((a, b) => a.id - b.id)

	return {
		videos: sortedData,
		isLoading,
	}
}
