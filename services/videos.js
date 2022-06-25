import { api } from './api'

export const getAllVideos = async () => {
	const { data } = await api.get('/videos')
	return data
}

export const getVideo = async id => {
	const { data } = await api.get(`/videos/${id}`)
	return data
}
