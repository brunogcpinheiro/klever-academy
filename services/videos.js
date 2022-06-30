import { api } from './api'

export const getAllVideos = async () => {
	const { data } = await api.get('/videos')
	return data
}

export const getVideo = async id => {
	const { data } = await api.get(`/videos/${id}`)
	return data
}

export const rateVideo = async ({ id, rating, token }) => {
	const { data } = await api.post(
		`user/add-video-rate`,
		{ video_id: id, rate: rating },
		{
			headers: {
				Authorization: `Token ${token}`,
			},
		}
	)
	return data
}
