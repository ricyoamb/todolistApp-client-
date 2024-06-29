'use client'

import Navbar from '../parts/Navbar'
import ToDoListTable from '../parts/toDoListAppTable'

function ToDoListApp() {

  const handleAddToDo = () => {
    // Tambahkan logika untuk menangani aksi tambah To-Do List disini
    console.log('Add To-Do List clicked')
  }

  return (
    <main className="user-page bg-bgColor relative h-screen font-poppins">
      <Navbar />
      <div className="flex-1 p-5">
        <div className="title-page flex justify-center pt-24">
          <h1 className="text-4xl font-semibold text-tertiary xl:font-bold">
            To-Do List App
          </h1>
        </div>
        <div className="flex ml-72 mt-12">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleAddToDo}
          >
            Add To-Do List
          </button>
        </div>
        <div className="flex justify-center">
          <ToDoListTable />
        </div>
      </div>
    </main>
  )
}

export default ToDoListApp
