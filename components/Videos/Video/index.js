import { Box, Stack, Text } from '@chakra-ui/react'
import Rating from '../../common/Rating'
import Player from '../../Player'

const Video = ({ video }) => {
	return (
		<Stack spacing={6} mt={10}>
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
					{video?.description}
				</Text>
				<Rating rate={video?.rate} />
				<Stack>
					<Stack direction='row'>
						<Text fontWeight='bold' color='white' fontSize='sm'>
							Author:
						</Text>
						<Text color='white' fontSize='sm'>
							Klever
						</Text>
					</Stack>
					{/* <Stack direction='row'>
						<Text fontWeight='bold' color='white' fontSize='sm'>
							Category:
						</Text>
						<Text color='white' fontSize='sm'>
							Blockchain
						</Text>
					</Stack> */}
					<Stack direction='row'>
						<Text fontWeight='bold' color='white' fontSize='sm'>
							Reward:
						</Text>
						<Text color='brand.primary' fontSize='sm'>
							100 KLV
						</Text>
					</Stack>
				</Stack>
				{/* <Box>
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
				</Box> */}
			</Stack>
			<Box w='full'>
				<Player videoUrl={video?.video_url} />
			</Box>
		</Stack>
	)
}

export default Video
