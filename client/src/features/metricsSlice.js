import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//Action
export const fetchMetrics = createAsyncThunk('fetchMetrics', async() => {
    const response = await fetch('/assignmentMetrics', {
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    });
    return response.json();
});

export const metricsSlice = createSlice({
    name: 'metrics',
    initialState: {
        isLoadingMetrics: false,
        dataMetrics: [],
        isErrorMetrics: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMetrics.pending, (state, action) => {
            state.isLoadingMetrics = true;
         });
        builder.addCase(fetchMetrics.fulfilled, (state, action) => {
           state.isLoadingMetrics = false;
           state.dataMetrics = action.payload;
        });
        builder.addCase(fetchMetrics.rejected, (state, action) => {
         console.log('Error', action.payload);
         state.isErrorMetrics = true;
        });
    },
});

export default metricsSlice.reducer;