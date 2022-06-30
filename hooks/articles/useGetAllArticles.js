import dayjs from 'dayjs'
import { useQuery } from 'react-query'
import { getAllArticles } from '../../services/articles'

export const useGetAllArticles = () => {
	const { isLoading, data } = useQuery('allArticles', getAllArticles)
	const sortedDataByDate = data?.sort((a, b) => dayjs(b.published_at) - dayjs(a.published_at))

	const featuredArticles = sortedDataByDate?.filter(article => article?.isFeatured)

	return {
		articles: sortedDataByDate,
		featuredArticles,
		isLoadingArticles: isLoading,
	}
}
