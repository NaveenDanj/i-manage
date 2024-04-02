import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Organization} from '../types';

interface currentOrganizationState {
  currentOrganization: Organization | null;
}

const initialState: currentOrganizationState = {
  currentOrganization: null,
};

export const organizationSlice = createSlice({
  name: 'Organization',
  initialState,
  reducers: {
    setOrganization: (state, action: PayloadAction<Organization>) => {
      state.currentOrganization = action.payload;
    },

    resetOrganization: state => {
      state.currentOrganization = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setOrganization, resetOrganization} = organizationSlice.actions;

export default organizationSlice.reducer;
