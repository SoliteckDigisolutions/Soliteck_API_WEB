import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phone: "",
  password: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setPhone, setPassword } = authSlice.actions;
export default authSlice.reducer;