'use client'

import Navbar from '@/components/parts/Navbar'
import Sidebar from '@/components/parts/Sidebar'
import ToDoListTable from '@/components/parts/ToDoListTable';

function ToDoListApp() {
  return (
    <main className="user-page bg-bgColor relative h-screen font-poppins ">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64 p-5">
          <div className="title-page flex justify-center pt-24">
            <h1 className="text-4xl font-semibold text-tertiary xl:font-bold">
              To-Do List App
            </h1>
          </div>

          <ToDoListTable />
        </div>
      </div>
    </main>
  )
}

export default ToDoListApp
