import axios from 'axios'

export const api = axios.create({
	baseURL: 'https://intense-ridge-56931.herokuapp.com/kleverApp/',
	headers: {
		'Content-Type': 'application/json',
	},
})
