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

	console.log(res)

	return res
}
