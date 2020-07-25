/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useMemo, useRef } from 'react'
import { useHistory, useLocation } from 'react-router'

const queryToObject = (search: string) => {
  //  /?search=xxxx & xxxxx=xxxxx
  return search
    .replace('?', '') //用空值替换?字符 /search=xxxx & xxxxx=xxxxx
    .split('&') //以’&‘分隔为字符串数组[search=xxxx,xxxxx=xxxxx]
    .map(item => item.split('=')) //返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值   [[search,xxxx],[xxxx,xxxx]]
    .reduce((res, cur) => {
      res[cur[0]] = cur[1]
      return res
    }, {} as any)
}
/*
res={},cur=[search,xxxx]
res={
  search:xxxxxxx
  own:xxxxx
}
*/

const objectToQuery = (obj: any) => {
  return (
    '?' +
    Object.keys(obj)
      .filter(item => obj[item])
      .reduce((res, cur, curindex, arr) => {
        if (curindex === arr.length - 1) {
          return `${res}${cur}=${obj[cur]}`
        }
        return `${res}${cur}=${obj[cur]}&`
      }, '')
  )
}
//返回query：地址栏 ？后的查询条件
export default function useQuery<T>() {
  const history = useHistory()
  const { search } = useLocation() //获取当前页面url的search   #hash   ?search
  const queryRef = useRef({}) //useRef 返回一个可变的 ref 对象;初始值为任意类型的空对象

  const query = useMemo(() => {
    const query1 = queryToObject(search)

    queryRef.current = query1 //.current 属性被初始化为传入的参数
    return query1
  }, [search]) //search发生改变

  const setQuery = useCallback((newQuery: object) => {
    history.replace(objectToQuery({ ...queryRef.current, ...newQuery }))
  }, []) //location改变

  return { query, setQuery }
}
