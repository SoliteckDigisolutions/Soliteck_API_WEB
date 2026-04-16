import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phone: "",
  password: "",
  isLoggedIn: false,
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
    loginSuccess: (state) => {
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.phone = "";
      state.password = "";
      state.isLoggedIn = false;
    },
  },
});

export const { setPhone, setPassword, loginSuccess, logoutUser } =
  authSlice.actions;

export default authSlice.reducer;