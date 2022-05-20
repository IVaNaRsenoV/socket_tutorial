import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  test: "",
};

const reducer = createSlice({
  name: "test",
  initialState,
  reducers: {
    test: (state, action) => {
      state.test = action.payload;
    },
  },
});

export const { test } = reducer.actions;
export default reducer.reducer;
