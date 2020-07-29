// 接收一个initFlag,返回一个flag=initFlag,三个改变flag的方法
import { useCallback, useState } from 'react'

export default function useFlag<T>(initFlag: boolean) {
  const [flag, setFlag] = useState(initFlag)
  const toggleFlag = useCallback(e => setFlag(!flag), [flag])

  return { flag, setFlag, toggleFlag }
}
