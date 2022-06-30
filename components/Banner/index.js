import { Box, Center, useColorModeValue, Image } from '@chakra-ui/react'

const Banner = ({ image }) => {
	return (
		<Center mt={6}>
			<Box role='group' w='full' boxShadow='2xl' rounded='lg' pos='relative' zIndex={1}>
				<Box
					rounded='lg'
					pos='relative'
					height='230px'
					_after={{
						transition: 'all .3s ease',
						content: '""',
						w: 'full',
						h: 'full',
						pos: 'absolute',
						top: 0,
						left: 0,
						backgroundImage: `url(${image})`,
						filter: 'blur(5px)',
						zIndex: -1,
					}}
					_groupHover={{
						_after: {
							filter: 'blur(10px)',
						},
					}}
				>
					<Image rounded='lg' height={230} width='100%' objectFit='cover' src={image} alt='banner' />
				</Box>
			</Box>
		</Center>
	)
}

export default Banner
