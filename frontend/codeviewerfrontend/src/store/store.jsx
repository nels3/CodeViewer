import { configureStore } from "@reduxjs/toolkit";
import seriesReducer from "./slices/series/seriesSlice";
import competitionsReducer from "./slices/competitions/competitionsSlice";
import tasksReducer from "./slices/tasks/tasksSlice";
import solutionsReducer from "./slices/solutions/solutionsSlice";

export const store = configureStore({
  reducer: {
    series: seriesReducer,
    competitions: competitionsReducer,
    tasks: tasksReducer,
    solutions: solutionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
