import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: { values: { status: false, user: [] } },
  reducers: {
    login: (state, action) => {
      state.values = action.payload;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
