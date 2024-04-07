import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTokens = createAsyncThunk(
    'token/fetchTokens',
    async (id, thunkApi) => {
      const response = await window.Bridge.interfaces.GreenWallet.connect();
      return response.json();
    }
);

export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    tokenList: [],
    tokenStatus: false,
    status: false,
  },
extraReducers: (builder) => {
    builder
      .addCase(fetchTokens.pending, (state) => {
        state.status = 'loading';
        console.log('loading')
      })
      .addCase(fetchTokens.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (action.payload){
            state.tokenStatus = true;
            console.log(action.payload, 'payload');
        }
        console.log('succeeded');
      })
      .addCase(fetchTokens.rejected, (state, action) => {
        state.status = 'failed';
        console.log('failed');
      });
  },
});

export default tokenSlice.reducer;