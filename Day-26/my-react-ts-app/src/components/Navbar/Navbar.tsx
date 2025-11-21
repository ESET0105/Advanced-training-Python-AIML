import React from 'react'

export default function Navbar() {
  return (
    <div>
    <div className='bg-pink-400 m-2 p-5 text-white font-extrabold'>
        Navbar
    </div>
    <div>
        <ul className='m-2 flex gap-4 justify-center bg-blue-300 p-3 text-white font-bold'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
    </div>
  )
}
