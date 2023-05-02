import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit';
import data from '../api/data.json';
import { removeUser } from './user-slice';

type TaskState = {
  entities: Task[];
};

const initialState: TaskState = {
  entities: data.tasks,
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
  extraReducers: (builder) => {
    builder.addCase(removeUser, (state, action) => {
      const userId = action.payload;
      for (const task of state.entities) {
        if (task.user === userId) {
          task.user = undefined;
        }
      }
    });
  },
});
export const taskReducer = taskSlice.reducer;
export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice;
