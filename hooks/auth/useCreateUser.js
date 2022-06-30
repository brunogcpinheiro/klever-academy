import { useState } from 'react'
import { useMutation } from 'react-query'
import { createUser } from '../../services/users'
import toast from 'react-hot-toast'

export const useCreateUser = () => {
	const [show, setShow] = useState(false)
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleClick = () => setShow(!show)

	const createUserMutation = useMutation(createUser, {
		onSuccess: () => {
			setFirstName('')
			setLastName('')
			setUsername('')
			setEmail('')
			setPassword('')
			toast('User created successfully!', { type: 'success' })
		},
		onError: error => toast(error?.message, { type: 'error' }),
	})

	const submitUser = e => {
		e.preventDefault()

		createUserMutation.mutate({
			firstName,
			lastName,
			username,
			email,
			password,
		})
	}

	return {
		handleClick,
		submitUser,
		show,
		firstName,
		setFirstName,
		lastName,
		setLastName,
		username,
		setUsername,
		email,
		setEmail,
		password,
		setPassword,
		loading: createUserMutation.isLoading,
	}
}
