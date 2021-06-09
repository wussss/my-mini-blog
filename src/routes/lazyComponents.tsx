import SpinCenter from '@/component/SpinCenter'
import React, { lazy, Suspense } from 'react'

export type TLazyComponentsKeys = keyof typeof lazyComponents

const withSuspense = (Component: any) => {
  return (props: any) => (
    <Suspense fallback={<SpinCenter />}>
      <Component {...props} />
    </Suspense>
  )
}

export const lazyComponents = {
  Frame: withSuspense(lazy(() => import('../pages/frame'))),
  Home: withSuspense(lazy(() => import('../pages/main/article_list'))),
  Post: withSuspense(lazy(() => import('../pages/main/post'))),
  Settings: withSuspense(lazy(() => import('../pages/main/settings'))),
  Editor: withSuspense(lazy(() => import('../pages/main/editor'))),
}
