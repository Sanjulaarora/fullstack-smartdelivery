import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Action
export const fetchPartners = createAsyncThunk('fetchPartners', async() => {
    const response = await fetch('/getpartners',{
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    });
    return response.json();
});

export const partnerSlice = createSlice({
    name: 'partner',
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPartners.pending, (state, action) => {
           state.isLoading = true;
        });
       builder.addCase(fetchPartners.fulfilled, (state, action) => {
          state.isLoading = false;
          state.data = action.payload;
       });
       builder.addCase(fetchPartners.rejected, (state, action) => {
        console.log('Error', action.payload);
        state.isError = true;
       });
    },
});


export default partnerSlice.reducer;