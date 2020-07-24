import React from 'react'
import { useHistory, Redirect } from 'react-router'
import { useLogin } from '@/redux/context'

interface IProps {
	children?: any
	needLogin?: boolean
}

const AuthRoute: React.FC<IProps> = ({ children, needLogin = false }) => {
	const history = useHistory()
	const isLogin = useLogin()
	// console.log({ needLogin })

	if (needLogin && !isLogin) {
		return <Redirect to={'/'} />
	}

	return children
}

export default AuthRoute
