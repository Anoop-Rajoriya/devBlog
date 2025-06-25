import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  status: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, setStatus, logout } = authSlice.actions;

export default authSlice.reducer;
