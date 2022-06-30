import { Flex, SimpleGrid, Text } from '@chakra-ui/react'
import ArticleCard from './ArticleCard'

const Articles = ({ articles }) => {
	return (
		<Flex direction='column' mt={10}>
			<Text color='white' fontSize='5xl' fontWeight='bold'>
				All Posted Articles
			</Text>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
				{articles && articles.map(article => <ArticleCard key={article?.id} article={article} />)}
			</SimpleGrid>
		</Flex>
	)
}

export default Articles
