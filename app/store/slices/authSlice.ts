import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phone: "",
  password: "",
  isLoggedIn: false,
  rememberMe: false,
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
    setRememberMe: (state, action) => {
      state.rememberMe = action.payload;
    },
    loginSuccess: (state) => {
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.phone = "";
      state.password = "";
      state.isLoggedIn = false;
      state.rememberMe = false;
    },
  },
});

export const { setPhone, setPassword, setRememberMe, loginSuccess, logoutUser } =
  authSlice.actions;

export default authSlice.reducer;