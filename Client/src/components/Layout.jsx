import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { Footer } from 'flowbite-react'
import SideBar from './SideBar'

export default function Layout() {
  return (
<>
<Header/>
<Outlet/>
</>
  )
}
