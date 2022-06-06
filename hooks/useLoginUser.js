import { useState } from 'react'
import { useMutation } from 'react-query'
import { loginUser } from '../services/users'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { useAuth } from '../context/Auth'

export const useLoginUser = () => {
	const router = useRouter()
	const { setIsLoggedIn, setUser } = useAuth()
	const [show, setShow] = useState(false)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleClick = () => setShow(!show)

	const loginUserMutation = useMutation(loginUser, {
		onSuccess: ({ data }) => {
			setUsername('')
			setPassword('')
			toast('Logged in successfully!', { type: 'success' })
			router.push('/')
			localStorage.setItem('klever-academy:token', data?.token)
			setIsLoggedIn(true)
			setUser({
				firstName: data?.userInfo?.firstName,
				lastName: data?.userInfo?.lastName,
				email: data?.userInfo?.email,
			})
		},
		onError: error => {
			const { data } = error?.response

			if (Object.keys(data)[0] === 'non_field_errors') {
				return toast(Object.values(data), { type: 'error' })
			}

			toast(`${Object.keys(data).join(' and ')}: ${Object.values(data)[0]}`, { type: 'error' })
		},
	})

	const submitLoginUser = e => {
		e.preventDefault()

		loginUserMutation.mutate({
			username,
			password,
		})
	}

	return {
		show,
		handleClick,
		username,
		setUsername,
		password,
		setPassword,
		loading: loginUserMutation.isLoading,
		submitLoginUser,
	}
}
