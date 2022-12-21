import { Outlet } from 'react-router-dom'
import { Navbar } from '~components/nav/Navbar'
import { DarkModeButton } from './common/index'

export default function AppLayout() {
  return (
    <div>
      <DarkModeButton />
      <Navbar />
      <div />
      <Outlet />
    </div>
  )
}
