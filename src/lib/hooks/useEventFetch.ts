import { useCallback, useEffect, useMemo, useState } from 'react'

export default function useEventFetch<T, V, U, X>(
	request: (args?: T) => Promise<V>,
	deps: any[],
	memoCb: (arg: V) => any = (a) => a,
	initialData?: V
) {
	const [ data, setData ] = useState(initialData)
	const [ isLoading, setIsLoading ] = useState(false)
	const [ isError, setIsError ] = useState(false)

	const [ didCancel, setDidCancel ] = useState(false)
	useEffect(() => {
		return () => {
			setDidCancel(true)
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps || [])

	const onEvent = useCallback(async () => {
		setIsLoading(true)
		try {
			const result = await request()

			if (!didCancel) {
				setData(result)
			}
		} catch (error) {
			if (!didCancel) {
				setIsError(true)
			}
		} finally {
			if (!didCancel) {
				setIsLoading(false)
			}
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps || [])

	const memoData = useMemo(
		() => {
			try {
				return memoCb(data as V)
			} catch (error) {
				console.warn(error.message)
				return data
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ data ]
	)

	return { data, setData, isLoading, isError, onEvent, memoData }
}
