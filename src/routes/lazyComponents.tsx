import SpinCenter from '@/component/SpinCenter'
import React, { lazy, Suspense } from 'react'

const withSuspense = (Component: any) => {
  return (props: any) => (
    <Suspense fallback={<SpinCenter />}>
      <Component {...props} />
    </Suspense>
  )
}
export const lazyComponents = {
  Editor: withSuspense(lazy(() => import('../pages/editor'))),
  Main: withSuspense(lazy(() => import('../pages/main'))),
  ArticleList: withSuspense(lazy(() => import('../pages/main/content/article_list'))),
  Detail: withSuspense(lazy(() => import('../pages/main/content/detail'))),
  Setting: withSuspense(lazy(() => import('../pages/main/content/setting'))),
}

export type TLazyComponentsKeys = keyof typeof lazyComponents


