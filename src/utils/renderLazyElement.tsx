import React from 'react'

export const renderLazyElement = (element: React.ReactNode): React.ReactNode => (
  <React.Suspense fallback={null}>{element}</React.Suspense>
)
