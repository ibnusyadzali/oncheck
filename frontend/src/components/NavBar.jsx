import React from 'react'

const NavBar = () => {
  return (
    <div>
        <div className='bg-secondary w-full h-14 fixed top-0 flex flex-row justify-between p-4 '>
            <p>Navbar</p>
            <p>User</p>
        </div>
        <div className='bg-secondary w-60 h-screen fixed top-14 pt-4 pl-4'>
            Sidebar
        </div>
    </div>
  )
}

export default NavBar