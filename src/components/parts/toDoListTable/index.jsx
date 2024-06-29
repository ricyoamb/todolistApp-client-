// components/parts/ToDoListTable.js

const ToDoListTable = () => {
  // Dummy data (contoh saja, sesuaikan dengan data sebenarnya)
  const todoListData = [
    {
      id: 1,
      userName: 'John Doe',
      todoListTitle: 'Grocery Shopping',
      taskTitle: 'Buy Apples',
      priority: 'High',
      status: 'Incomplete',
      startDate: '2024-06-29',
      dueDate: '2024-07-15',
    },
    {
      id: 2,
      userName: 'Jane Smith',
      todoListTitle: 'Home Improvement',
      taskTitle: 'Paint Living Room',
      priority: 'Medium',
      status: 'Complete',
      startDate: '2024-06-29',
      dueDate: '2024-07-10',
    },
    {
      id: 3,
      userName: 'Michael Brown',
      todoListTitle: 'Work Projects',
      taskTitle: 'Prepare Presentation',
      priority: 'Low',
      status: 'Incomplete',
      startDate: '2024-06-29',
      dueDate: '2024-07-20',
    },
  ]

  return (
    <div className="m-16 flex items-center">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-gray-300 shadow-md rounded">
          <thead>
            <tr className="bg-primary">
              <th className="py-2 px-4">User</th>
              <th className="py-2 px-4">To Do List</th>
              <th className="py-2 px-4">Task</th>
              <th className="py-2 px-4">Start Date</th>
              <th className="py-2 px-4">Due Date</th>
              <th className="py-2 px-4">Priority</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {todoListData.map((item) => (
              <tr key={item.id} className="border-b border-gray-200">
                <td className="py-2 px-4">{item.userName}</td>
                <td className="py-2 px-4">{item.todoListTitle}</td>
                <td className="py-2 px-4">{item.taskTitle}</td>
                <td className="py-2 px-4">{item.startDate}</td>
                <td className="py-2 px-4">{item.dueDate}</td>
                <td className="py-2 px-4">{item.priority}</td>
                <td className="py-2 px-4">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ToDoListTable
