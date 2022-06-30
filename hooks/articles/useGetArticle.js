import { useQuery } from 'react-query'
import { getArticle } from '../../services/articles'

export const useGetArticle = id => {
	const { isLoading, data } = useQuery('article', () => getArticle(id), {
		enabled: !!id,
	})

	return {
		article: data,
		isLoading,
	}
}
