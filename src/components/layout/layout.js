"use client";
import React from 'react'
import { usePathname } from 'next/navigation'
import MahindraNavbar from '@/components/nav'
import Footer from '@/components/footer'

export default function Layout({ children }) {
  const pathname = usePathname()
  const notShow = pathname === "/enquire"
const routes =["/enquire"]

if(routes.includes(pathname)) return children
  return (
    <div>
      <MahindraNavbar />
      {children}
    </div>
  )
}