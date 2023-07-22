import {
  useGetTasksQuery,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from '../api/apiSlice';
import TaskCard from './TaskCard';

function TasksList() {
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  const { data: tasks, isError, error, isLoading } = useGetTasksQuery();

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className='flex flex-col bg-zinc-900 rounded-md m-auto w-4/5 p-5 justify-center items-center gap-4 mt-4'>
      <TaskCard tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  );
}

export default TasksList;
