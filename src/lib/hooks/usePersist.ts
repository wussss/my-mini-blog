import axios from 'axios'
import { useEffect } from 'react'

import { defaultStore } from '@/redux/store'

export function usePersistedContext<T>(context: T, key = 'state', flag = true): T {
  // if (!flag) {
  //   return context
  // }

  const persistedContext = JSON.parse(localStorage.getItem(key) || 'null') || defaultStore

  axios.defaults.headers.common.Authorization = persistedContext!.user && persistedContext.user.access_token

  return persistedContext ? persistedContext : context
}

export function usePersistedReducer([state, dispatch]: any[], key = 'state', flag = true) {
  useEffect(() => {
    axios.defaults.headers.common.Authorization = state.user && state.user.access_token

    return localStorage.setItem(key, JSON.stringify(state))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])
  return [state, dispatch]
}
