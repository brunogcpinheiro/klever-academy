import { Box, Button, Center, Flex, Image, Stack, Text } from '@chakra-ui/react'
import { FiPlayCircle } from 'react-icons/fi'
import Banner from '../Banner'
import Rating from '../common/Rating'
import Player from '../Player'

const Video = ({ video }) => {
	return (
		<Stack spacing={6}>
			<Box>
				<Banner image='/img/eth.jpg' />
			</Box>
			<Box>
				<Text fontSize='5xl' fontWeight='bold' color='white'>
					{video?.title}
				</Text>
			</Box>
			<Stack>
				<Text fontSize='xl' color='white' fontWeight='bold'>
					Overview
				</Text>
				<Text fontSize='md' color='white'>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type
					and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
					leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
					with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
					publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</Text>
				<Rating />
				<Stack>
					<Stack direction='row'>
						<Text fontWeight='bold' color='white' fontSize='sm'>
							Author:
						</Text>
						<Text color='white' fontSize='sm'>
							Klever
						</Text>
					</Stack>
					<Stack direction='row'>
						<Text fontWeight='bold' color='white' fontSize='sm'>
							Category:
						</Text>
						<Text color='white' fontSize='sm'>
							Blockchain
						</Text>
					</Stack>
					<Stack direction='row'>
						<Text fontWeight='bold' color='white' fontSize='sm'>
							Reward:
						</Text>
						<Text color='brand.primary' fontSize='sm'>
							100 KLV
						</Text>
					</Stack>
				</Stack>
				<Box>
					<Button
						bgColor='brand.primary'
						color='white'
						w='fit-content'
						fontWeight='bold'
						leftIcon={<FiPlayCircle />}
						textTransform='uppercase'
						_hover={{ opacity: 0.8 }}
					>
						Start Now
					</Button>
				</Box>
			</Stack>
			<Box w='full'>
				<Player />
			</Box>
		</Stack>
	)
}

export default Video
