import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "interfaces/redux/auth";

const initialState: AuthState = {};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    reset: () => initialState,
    increment: (state) => {},
  },
});

export const authActions = {
  ...authSlice.actions,
};
export default authSlice.reducer;
