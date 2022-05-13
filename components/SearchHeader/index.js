import { Box, Button, Input, Stack, Text } from '@chakra-ui/react'
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
				<Stack direction='row' spacing={10}>
					<Text as='span' color='white' fontWeight='bold' fontSize='sm'>
						List by:
					</Text>
					<Button
						variant='link'
						size='sm'
						_hover={{
							color: 'brand.primary',
						}}
					>
						Articles
					</Button>
					<Button
						variant='link'
						size='sm'
						_hover={{
							color: 'brand.primary',
						}}
					>
						Videos
					</Button>
					<Button
						variant='link'
						size='sm'
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
