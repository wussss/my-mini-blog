import React from 'react'
// import Navigation from './Navigation';
import Profile from './Profile'
import Password from './Password'
import { Wrapper } from './style'
import useNeedLogin from '@/lib/hooks/useNeedLogin'

// 被选中的导航栏标签序号（从 0 开始）默认为 0 (暂时写死)
const activeTag: number = 0

const getView = (tag: number) => {
	switch (tag) {
		case 0:
			return <Profile />
		case 1:
			return <Password />
	}
}

const Settings: React.FC = (props) => {
	useNeedLogin()
	return (
		<Wrapper>
			{getView(activeTag)}
		</Wrapper>
	)
}

export default Settings
