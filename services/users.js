import { api } from './api'

export const createUser = async payload => {
	const { firstName, lastName, email, password } = payload
	await api.post('/user/add', {
		name: firstName,
		lastName,
		email,
		password,
	})
}
