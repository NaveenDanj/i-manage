import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {User} from '../types';

interface currentUserState {
  currentUser: User | null;
}

const initialState: currentUserState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },

    resetUser: state => {
      state.currentUser = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUser} = userSlice.actions;

export default userSlice.reducer;
