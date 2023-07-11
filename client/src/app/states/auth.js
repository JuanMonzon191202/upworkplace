import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isLogin = true;
    },
    setBranch: (state, action) => {
      state.branchSelect = action.payload;
    },
    logOut: () => initialState,
    isLogin: (state) => state.isLogin,
  },
});

export const { setCredentials, logOut, isLogin, setBranch } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentRole = (state) => state.auth.user?.roles;
export const selectCurrentLogin = (state) => state.auth.isLogin;
export const selectCurrentToken = (state) => state.auth.token;
