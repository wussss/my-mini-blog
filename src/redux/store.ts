import React, { useContext } from 'react'
interface IStore {
  showLogin: boolean //登录弹窗是否展示
  checkUser: any //用户是否存在
  user: any
  query: {
    search: string
    sort: string
  } //搜索条件
  articleList: any[]
  likeList: any[]
  followingList: any[]
  followersList: any[]
  dispatch(action: { type: string; payload?: any }): void
}

export const defaultStore = {
  showLogin: false,
  checkUser: {},
  user: {},
  query: { search: '', sort: '' },
  articleList: [],
  likeList: [],
  followingList: [],
  followersList: [],
  dispatch: (arg: any) => arg,
}

const Store = React.createContext<IStore>(defaultStore)//Context对象

export const useRedux = () => useContext(Store) 

export const useDispatch = () => {
  const dispatch = useContext(Store).dispatch
  return dispatch
}

export const useSelector = <T extends IStore>(cb: (store: IStore) => T | IStore = arg => arg) => cb(useContext(Store))
//T里面的类型声明多于IStore
export const useLogin = () => {
  const store = useRedux()
  return !!Object.keys(store.user || {}).length //返回一个数组，数组的每一项为user的属性，数组长度为属性个数
}
export default Store
