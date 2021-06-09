//必须要登录才能看到的页面，如果没有登录会回到首页
import { useHistory } from 'react-router-dom'
import { useLogin } from '@/redux/store'

export default function useNeedLogin(needLogin = true) {
  const isLogin = useLogin()
  const history = useHistory()
  if (!isLogin && needLogin) {
    history.replace('/')
    //阻止从地址栏进入
  }
}
