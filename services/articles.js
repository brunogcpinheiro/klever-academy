import { api } from './api'

export const getAllArticles = async () => {
	const { data } = await api.get('/articles')
	return data
}

export const getArticle = async id => {
	const { data } = await api.get(`/articles/${id}`)
	return data
}
