import { Box, Button, Input, Text } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'

const SearchHeader = () => {
	return (
		<Box py={6} display='flex' alignItems='center' justifyContent='space-between'>
			<Box display='flex' alignItems='center'>
				<Input
					w='md'
					placeholder='Search article, video, course...'
					borderWidth={1}
					borderColor='brand.accent'
					size='sm'
					borderRadius='sm'
					color='white'
					_placeholder={{
						color: 'gray.700',
					}}
				/>
				<Button
					bgColor='brand.primary'
					color='white'
					px={8}
					leftIcon={<FaSearch />}
					textTransform='uppercase'
					size='sm'
					ml={4}
					borderRadius='sm'
					_hover={{
						opacity: 0.8,
					}}
				>
					Search
				</Button>
			</Box>
			<Box>
				<Text
					as='a'
					textTransform='uppercase'
					color='white'
					fontWeight='bold'
					textDecoration='underline'
					cursor='pointer'
					_hover={{
						opacity: 0.8,
					}}
				>
					More Viewed Courses
				</Text>
			</Box>
		</Box>
	)
}

export default SearchHeader
