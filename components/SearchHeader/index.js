import { Box, Button, Input, Stack, Text } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'

const SearchHeader = ({ filter, setFilter, setSearch, handleSearch }) => {
	return (
		<Box
			py={6}
			display='flex'
			flexDirection={['column', 'column', 'column', 'row']}
			alignItems='center'
			justifyContent='space-between'
		>
			<Box display='flex' flexDirection={['column', 'column', 'row', 'row']} alignItems='center'>
				<Input
					w='xs'
					placeholder='Search article, video...'
					borderWidth={1}
					borderColor='brand.accent'
					size='sm'
					borderRadius='sm'
					color='white'
					_placeholder={{
						color: 'gray.500',
					}}
					_hover={{
						borderColor: 'brand.secondary',
					}}
					_focus={{
						borderColor: 'brand.primary',
					}}
					onChange={e => setSearch(e.target.value)}
				/>
				<Button
					bgColor='brand.primary'
					color='white'
					px={8}
					my={['6', '6', '0', '0']}
					leftIcon={<FaSearch />}
					textTransform='uppercase'
					size='sm'
					ml={4}
					borderRadius='sm'
					_hover={{
						opacity: 0.8,
					}}
					onClick={handleSearch}
				>
					Search
				</Button>
			</Box>
			<Box mt={['0', '0', '6', '0']}>
				<Stack direction='row' spacing={6}>
					<Text
						display={['none', 'none', 'block', 'block']}
						as='span'
						color='white'
						fontWeight='bold'
						fontSize='sm'
					>
						Filter by:
					</Text>
					<Button
						variant='link'
						size='sm'
						_hover={{
							color: 'brand.primary',
						}}
						onClick={() => setFilter('All')}
						color={filter === 'All' ? 'brand.primary' : 'white'}
					>
						All
					</Button>
					<Button
						variant='link'
						size='sm'
						_hover={{
							color: 'brand.primary',
						}}
						onClick={() => setFilter('Video')}
						color={filter === 'Video' ? 'brand.primary' : 'white'}
					>
						Videos
					</Button>
					<Button
						variant='link'
						size='sm'
						_hover={{
							color: 'brand.primary',
						}}
						onClick={() => setFilter('Article')}
						color={filter === 'Article' ? 'brand.primary' : 'white'}
					>
						Articles
					</Button>
					<Button
						variant='link'
						size='sm'
						disabled
						_hover={{
							color: 'brand.primary',
						}}
					>
						Courses
					</Button>
				</Stack>
			</Box>
		</Box>
	)
}

export default SearchHeader
