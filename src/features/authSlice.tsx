import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userStatus: false,
  userData: null,
};

const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.userStatus = true;
      state.userData = action.payload.userData;
    },
    logout(state) {
      state.userStatus = false;
      state.userData = null;
    },
  },
});

export const {setUser, logout} = authSlice.actions
export default authSlice.reducer;
