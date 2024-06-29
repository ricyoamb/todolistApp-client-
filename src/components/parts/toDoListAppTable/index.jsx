// components/parts/ToDoListTable.js

const ToDoListTable = () => {
  // Dummy data (contoh saja, sesuaikan dengan data sebenarnya)
  const todoListData = [
    {
      id: 1,
      todoListTitle: 'Grocery Shopping',
      taskTitle: 'Buy Apples',
      priority: 'High',
      status: 'Incomplete',
      startDate: '2024-06-29',
      dueDate: '2024-07-15',
    },
    {
      id: 2,
      todoListTitle: 'Home Improvement',
      taskTitle: 'Paint Living Room',
      priority: 'Medium',
      status: 'Complete',
      startDate: '2024-06-29',
      dueDate: '2024-07-10',
    },
    {
      id: 3,
      todoListTitle: 'Work Projects',
      taskTitle: 'Prepare Presentation',
      priority: 'Low',
      status: 'Incomplete',
      startDate: '2024-06-29',
      dueDate: '2024-07-20',
    },
  ]

  const handleEdit = (id) => {
    // Tambahkan logika untuk meng-handle edit disini
    console.log(`Edit item with ID ${id}`)
  }

  const handleDelete = (id) => {
    // Tambahkan logika untuk meng-handle delete disini
    console.log(`Delete item with ID ${id}`)
  }

  return (
    <div className="mt-3 ml-20 flex items-center">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded">
          <thead>
            <tr className="bg-primary border-b border-gray-300">
              <th className="py-2 px-4 border-r border-gray-300">To-Do List</th>
              <th className="py-2 px-4 border-r border-gray-300">Task</th>
              <th className="py-2 px-4 border-r border-gray-300">Start Date</th>
              <th className="py-2 px-4 border-r border-gray-300">Due Date</th>
              <th className="py-2 px-4 border-r border-gray-300">Priority</th>
              <th className="py-2 px-4 border-r border-gray-300">Status</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {todoListData.map((item) => (
              <tr key={item.id} className="border-b border-gray-300">
                <td className="py-2 px-4 border-r border-gray-300">
                  {item.todoListTitle}
                </td>
                <td className="py-2 px-4 border-r border-gray-300">
                  {item.taskTitle}
                </td>
                <td className="py-2 px-4 border-r border-gray-300">
                  {item.startDate}
                </td>
                <td className="py-2 px-4 border-r border-gray-300">
                  {item.dueDate}
                </td>
                <td className="py-2 px-4 border-r border-gray-300">
                  {item.priority}
                </td>
                <td className="py-2 px-4 border-r border-gray-300">
                  {item.status}
                </td>
                <td className="py-2 px-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ToDoListTable
