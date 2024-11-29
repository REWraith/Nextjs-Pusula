import React, { useEffect, useState } from 'react'
import Header from './header'
import Footer from './footer'

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header/>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout