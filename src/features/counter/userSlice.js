import { createSlice } from '@reduxjs/toolkit';

// The function below is called a thunk and allows us to perform async logic. It
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Abu Said',
    email: 'abusaid@gmail.com',
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    deleteUser: (state) => {
      state = {};
    }
  }
});

export const { updateUser, deleteUser } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state) => state.user;

export default userSlice.reducer;
