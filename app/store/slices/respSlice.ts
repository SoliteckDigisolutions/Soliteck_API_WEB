import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  respDatat : ""
};


const authSlice = createSlice({
  name: "respData",
  initialState,
  reducers: {
    setResponse: (state, action) => {
      state.respDatat = action.payload;
    },
  
  },
});


export const { setResponse } = authSlice.actions;
export default authSlice.reducer;