import ReactPlayer from 'react-player'

const Player = ({ videoUrl }) => {
	return <ReactPlayer controls width='100%' height='500px' url={videoUrl} />
}

export default Player
