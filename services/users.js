import { localStorageManager } from '@chakra-ui/react'
import { api } from './api'

export const createUser = async payload => {
	const { firstName, lastName, username, email, password } = payload
	await api.post('/user/add', {
		first_name: firstName,
		last_name: lastName,
		username,
		email,
		password,
	})
}

export const loginUser = async payload => {
	const { username, password } = payload
	const res = await api.post('/user/login', {
		username,
		password,
	})

	return res
}

export const refreshLogin = async token => {
	try {
		const res = await api.post(
			'/user/refresh-login',
			{},
			{
				headers: {
					Authorization: `Token ${token}`,
				},
			}
		)

		return res
	} catch (error) {
		return error
	}
}
