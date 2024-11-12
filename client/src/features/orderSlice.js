import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//Action
export const fetchOrders = createAsyncThunk('fetchOrders', async() => {
    const response = await fetch('/getorders', {
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    });
    return response.json();
});

export const orderSlice = createSlice({
    name: 'order',
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchOrders.pending, (state, action) => {
            state.isLoading = true;
         });
        builder.addCase(fetchOrders.fulfilled, (state, action) => {
           state.isLoading = false;
           state.data = action.payload;
        });
        builder.addCase(fetchOrders.rejected, (state, action) => {
         console.log('Error', action.payload);
         state.isError = true;
        });
    },
});

export default orderSlice.reducer;