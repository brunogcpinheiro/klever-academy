import { useState } from 'react'
import { Box, Button, Icon, Stack, Text } from '@chakra-ui/react'
import { BiMovie } from 'react-icons/bi'
import { FiPlayCircle } from 'react-icons/fi'
import Link from 'next/link'
import Rating from '../../common/Rating'
import { truncate } from '../../../utils'

const ResourceCard = ({ title, description, rate }) => {
	return (
		<Stack bgColor='brand.secondary' w='fit-content' borderRadius='sm' p={4}>
			<Icon as={BiMovie} color='gray.100' boxSize='10' />
			<Text color='gray.100' fontSize='sm' fontWeight='bold'>
				{title}
			</Text>
			<Rating rate={rate} />
			<Text color='gray.300' fontSize='sm' fontWeight='bold'>
				{truncate(description, 50)}
			</Text>
			<Link href='/introduction-to-blockchain'>
				<Box display='flex' alignItems='center' justifyContent='flex-end'>
					<Button
						bgColor='brand.accent'
						color='white'
						size='sm'
						w='fit-content'
						leftIcon={<FiPlayCircle />}
						textTransform='uppercase'
						_hover={{ opacity: 0.8 }}
					>
						Play
					</Button>
				</Box>
			</Link>
		</Stack>
	)
}

export default ResourceCard
