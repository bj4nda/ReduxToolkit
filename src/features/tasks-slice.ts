import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit';

type TaskState = {
  entities: Task[];
};

const initialState: TaskState = {
  entities: [],
};

type DraftTask = Pick<Task, 'title'>;

const createTask = (draftTask: DraftTask): Task => {
  return {
    id: nanoid(),
    ...draftTask,
  };
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const task = createTask(action.payload);
      state.entities.unshift(task);
    },
    removeTask: (state, action: PayloadAction<Task['id']>) => {
      const index = state.entities.findIndex(
        (task) => task.id === action.payload,
      );
      state.entities.splice(index, 1);
    },
  },
});
export const taskReducer = taskSlice.reducer;
export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice;
