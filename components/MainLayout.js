import React, { useEffect, useState } from 'react'
import Header from './header'
import Footer from './footer'
import Division from './division'

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
      <Division />
    </div>
  )
}

export default MainLayout
