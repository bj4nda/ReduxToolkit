import Task from './task';

import { useAppSelector } from '../hooks';

const TaskList = () => {
  // const { tasks } = useContext(ApplicationContext);
  const tasks = useAppSelector((state) => state.tasks.entities);
  return (
    <section className="task-list">
      {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
    </section>
  );
};

export default TaskList;
