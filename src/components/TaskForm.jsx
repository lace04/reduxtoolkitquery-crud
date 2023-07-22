import { useCreateTaskMutation } from '../api/apiSlice';

function TaskForm() {
  const [createTask] = useCreateTaskMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value.trim();
    const description = e.target.elements.description.value.trim();
    const completed = e.target.elements.completed.checked;

    createTask({ name, description, completed });
  };

  return (
    <>
      <header className='text-center'>
        <h1 className='p-4 text-5xl  font-bold mt-8'>
          Tasks App <p className='text-xs mt-2'>with Redux Toolkit Query</p>
        </h1>
      </header>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col bg-zinc-700 rounded-md m-auto w-2/5 p-5 justify-center items-center gap-4'
      >
        <input
          type='text'
          name='name'
          className='bg-zinc-800 rounded-md p-2 w-full'
          placeholder="Task's name"
        />
        <textarea
          name='description'
          rows={3}
          className='bg-zinc-800 rounded-md p-2 w-full'
          placeholder="Task's description"
        />
        <div className='flex gap-4 items-center'>
          <input
            type='checkbox'
            name='completed'
            // className='bg-zinc-800 rounded-md p-2 w-full'
            className="h-4 w-4 text-green-500 bg-green-500"

          />
          <label htmlFor=''>Completed</label>
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 transition w-full rounded-md px-4 py-2 font-bold'
        >
          Add task
        </button>
      </form>
    </>
  );
}

export default TaskForm;
