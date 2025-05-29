import { BrowserRouter, Routes, Route } from 'react-router'
import { renderLazyElement } from '@/utils/renderLazyElement'
import { lazy } from 'react'
import ROUTES from '@/constants/routes'
import PageLayout from '@/components/layout/PageLayout'

const Home = lazy(() => import('@/pages/Home'))
const ListDetails = lazy(() => import('@/pages/GroceryDetails'))

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route
            path={ROUTES.home()}
            element={renderLazyElement(<Home />)}
          />
          <Route
            path={ROUTES.groceryDetails()}
            element={renderLazyElement(<ListDetails />)}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
