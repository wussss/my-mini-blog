// 接收一个initFlag,返回一个flag=initFlag,三个改变flag的方法
import { useCallback, useState } from 'react'

export default function useFlag<T>(initFlag: boolean) {
  const [flag, setFlag] = useState(initFlag)

  const setTrue = useCallback(e => setFlag(true), [])

  const setFalse = useCallback(e => setFlag(false), [])

  const toggleFlag = useCallback(e => setFlag(!flag), [flag])

  return { flag, setTrue, setFalse, setFlag, toggleFlag }
}
