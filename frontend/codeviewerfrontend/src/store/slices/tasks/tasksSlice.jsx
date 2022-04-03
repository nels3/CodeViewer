import { createSlice } from "@reduxjs/toolkit";
import { fetchTasksList } from "./tasksThunk";

export interface TasksSlice {
  list: [];
  fullList: [];
  selectedCompetitionName: string;
  loadingList: Boolean;
}

const initialState: CompetitionsSlice = {
  list: [],
  fullList: [],
  selectedCompetitionName: "All",
  loadingList: false,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setSelectedCompetitionName(state, action) {
      state.selectedCompetitionName = action.payload;
      if (action.payload !== "All") {
        state.list = state.fullList.filter(
          (task) => task.competition === action.payload
        );
      } else {
        state.list = state.fullList;
      }
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasksList.fulfilled, (state, action) => {
      state.list = action.payload;
      state.fullList = action.payload;
      state.loadingList = false;
    });
  },
});

export const { setSelectedCompetitionName } = tasksSlice.actions;

export default tasksSlice.reducer;
