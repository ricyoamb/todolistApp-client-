// Sidebar.js

import Link from 'next/link'
import { HiUserAdd } from 'react-icons/hi'
import { MdOutlineAddTask } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <aside className="w-64 h-full bg-secondary fixed left-0 p-5 border-r-2 border-gray-300">
      <ul className="space-y-4 mt-4 pt-44">
        <li>
          <Link href="users/createUser">
            <button className="mt-5 min-w-28 rounded-md bg-tertiary px-3 py-2 text-primary hover:bg-secondary md:mt-0">
              <span className="flex items-center justify-center">
                <HiUserAdd className="mr-1" />
                Create User
              </span>
            </button>
          </Link>
        </li>
        <li>
          <Link href="users/createUser">
            <button className="mt-5 min-w-28 rounded-md bg-tertiary px-3 py-2 text-primary hover:bg-secondary md:mt-0">
              <span className="flex items-center justify-center">
                <FaListCheck className="mr-1" />
                Create To-Do List
              </span>
            </button>
          </Link>
        </li>
        <li>
          <Link href="users/createUser">
            <button className="mt-5 min-w-28 rounded-md bg-tertiary px-3 py-2 text-primary hover:bg-secondary md:mt-0">
              <span className="flex items-center justify-center">
                <MdOutlineAddTask className="mr-1" />
                Create Task
              </span>
            </button>
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
