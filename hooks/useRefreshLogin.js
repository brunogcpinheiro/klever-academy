import { useMutation } from 'react-query'
import { refreshLogin } from '../services/users'
import { useRouter } from 'next/router'

export const useRefreshLogin = () => {
	const router = useRouter()

	const refreshLoginMutation = useMutation(refreshLogin, {
		onSuccess: ({ data }) => {
			localStorage.setItem('klever-academy:token', data?.token)
		},
		onError: () => {
			router.push('/login')
			toast('You need to login again!', { type: 'error' })
		},
	})

	return {
		refreshLoginMutation,
	}
}
