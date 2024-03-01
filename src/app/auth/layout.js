import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='w-full h-screen relative'>
        {children}
    </div>
  )
}

export default Layout