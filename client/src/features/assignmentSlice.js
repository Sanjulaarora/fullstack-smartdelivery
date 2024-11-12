import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//Action
export const fetchAssignments = createAsyncThunk('fetchAssignments', async() => {
    const response = await fetch('/getassignments', {
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    });
    return response.json();
});

export const assignmentSlice = createSlice({
    name: 'assignments',
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAssignments.pending, (state, action) => {
            state.isLoading = true;
         });
        builder.addCase(fetchAssignments.fulfilled, (state, action) => {
           state.isLoading = false;
           state.data = action.payload;
        });
        builder.addCase(fetchAssignments.rejected, (state, action) => {
         console.log('Error', action.payload);
         state.isError = true;
        });
    },
});

export default assignmentSlice.reducer;