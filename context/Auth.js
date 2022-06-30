import PropTypes from 'prop-types'
import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
	let token

	if (typeof window !== 'undefined') {
		token = localStorage.getItem('klever-academy:token')
	}
	const [isLoggedIn, setIsLoggedIn] = useState(token)
	const [user, setUser] = useState({})

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn,
				setIsLoggedIn,
				user,
				setUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
}

export default AuthProvider
