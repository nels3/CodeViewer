import { createSlice } from "@reduxjs/toolkit";
import { fetchSolutionsList } from "./solutionsThunk";

export interface SolutionsSlice {
  list: [];
  fullList: [];
  selectedTaskName: string;
  loadingList: Boolean;
}

const initialState: SolutionsSlice = {
  list: [],
  fullList: [],
  selectedTaskName: "All",
  loadingList: false,
};

export const solutionsSlice = createSlice({
  name: "solutions",
  initialState,
  reducers: {
    setSelectedTaskName(state, action) {
      state.selectedTaskName = action.payload;
      if (action.payload !== "All") {
        state.list = state.fullList.filter(
          (task) => task.task === action.payload
        );
      } else {
        state.list = state.fullList;
      }
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSolutionsList.fulfilled, (state, action) => {
      state.list = action.payload;
      state.fullList = action.payload;
      state.loadingList = false;
    });
  },
});

export const { setSelectedTaskName } = solutionsSlice.actions;

export default solutionsSlice.reducer;
