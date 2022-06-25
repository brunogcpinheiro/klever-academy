import { useQuery } from 'react-query'
import { getVideo } from '../../services/videos'

export const useGetVideo = id => {
	const { isLoading, data } = useQuery('video', () => getVideo(id))

	return {
		video: data,
		isLoading,
	}
}
