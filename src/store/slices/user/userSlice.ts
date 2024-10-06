import { createSlice } from '@reduxjs/toolkit';

// Define the initial state of the user slice
const initialState = {
    accessToken: '', // User's access token
    id: '', // User's ID
    name: '', // User's name
    email: '' // User's email
};

// Create the user slice using createSlice
export const userSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        // Reducer for updating user information
        AdduserInfo: (state, { payload }) => {
            state.id = payload?.userId;
            state.name = payload?.name;
            state.email = payload?.email;
            state.accessToken = payload?.token;
        }
    }
});

// Action creators are automatically generated for each case reducer function

// Export the action creators
export const { AdduserInfo } = userSlice.actions;

// Export the user slice reducer
export default userSlice.reducer;
