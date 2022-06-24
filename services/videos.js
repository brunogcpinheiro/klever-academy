import { api } from './api'

export const getAllVideos = async () => {
	const { data } = await api.get('/videos')
	return data
}
