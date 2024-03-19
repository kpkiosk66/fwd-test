import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import costReducer from "./costSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    cost: costReducer,
  },
});

export default store;
