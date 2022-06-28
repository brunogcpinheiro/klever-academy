import { api } from './api'

export const getAllArticles = async () => {
	const { data } = await api.get('/get-all-articles')
	return data
}
