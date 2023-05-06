import Task from './task';
import Loading from './loading';
import { useTasks } from '../hooks';

const TaskList = () => {
  // const { tasks } = useContext(ApplicationContext);
  const [tasks, loading] = useTasks();
  return (
    <section className="task-list">
      <Loading loading={loading} />
      {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
    </section>
  );
};

export default TaskList;
