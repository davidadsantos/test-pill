import { configureStore } from "@reduxjs/toolkit";
import loadingSliceReducer from "@src/store/loading";

export const store = configureStore({
  reducer: {
    loading: loadingSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
