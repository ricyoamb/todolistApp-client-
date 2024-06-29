// Navbar.js

import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-primary p-4 flex justify-between items-center border-b-2 border-gray-300">
      <div className="logo">
        <Link href="/" className="text-xl font-bold">
          To-Do List
        </Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
