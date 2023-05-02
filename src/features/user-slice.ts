import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit';
import data from '../api/data.json';

type userState = {
  entities: User[];
};

const initialState: userState = {
  entities: data.users,
};

type Draftuser = RequireOnly<User, 'realName' | 'alterEgo'>;

const createUser = (user: Draftuser): User => {
  return {
    id: nanoid(),
    tasks: [],
    ...user,
  };
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      const user = createUser(action.payload);
      state.entities.unshift(user);
    },
    removeUser: (state, action: PayloadAction<User['id']>) => {
      const index = state.entities.findIndex(
        (user) => user.id === action.payload,
      );
      state.entities.splice(index, 1);
    },
  },
});

export const userReducer = userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
