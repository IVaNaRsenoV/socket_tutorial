import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/reducer1";

const store = configureStore({
  reducer: {
    test: reducer,
  },
});

export default store;
