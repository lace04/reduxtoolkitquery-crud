function TaskCard({ tasks, deleteTask, updateTask }) {
  return (
    <>
      <h1 className='text-3xl font-bold'>Tasks list</h1>
      <div className=' w-full min-h-[200px]'>
        <ul className='grid grid-cols-3 gap-x-4 gap-y-4 '>
          {tasks.map((task) => (
            <li key={task.id} className='bg-zinc-700 rounded-md'>
              <h3 className='text-2xl font-bold m-4 text-center'>
                {task.name}
              </h3>
              <p className='text-base m-4 p-2 bg-zinc-900 rounded-md'>
                {task.description}
              </p>
              <div className='flex justify-between m-4'>
                <button
                  onClick={() => deleteTask(task.id)}
                  className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded transition'
                >
                  Delete
                </button>
                <div className='flex gap-x-3 items-center'>
                  <input
                    type='checkbox'
                    id={task.id}
                    onChange={() =>
                      updateTask({ ...task, completed: !task.completed })
                    } // This is the only line that changes
                    checked={task.completed}
                    className='h-4 w-4 text-green-500 bg-green-500'
                  />
                  <label htmlFor={task.id}>Completed</label>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TaskCard;
