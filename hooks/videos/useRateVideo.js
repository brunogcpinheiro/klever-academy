import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { rateVideo } from '../../services/videos'

export const useRateVideo = () => {
	const rateVideoMutation = useMutation(rateVideo, {
		onSuccess: () => {
			toast('Video rated successfully!', { type: 'success' })
		},
		onError: error => toast(error?.response?.data?.message, { type: 'error' }),
	})

	const submitRate = ({ id, rating, token }) => {
		rateVideoMutation.mutate({
			id,
			rating,
			token,
		})
	}

	return {
		submitRate,
		error: rateVideoMutation.error,
	}
}
