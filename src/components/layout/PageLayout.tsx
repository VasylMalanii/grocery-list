import { Outlet } from 'react-router'
import NavBar from '@/components/layout/NavBar.tsx'

export default function PageLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  )
}
