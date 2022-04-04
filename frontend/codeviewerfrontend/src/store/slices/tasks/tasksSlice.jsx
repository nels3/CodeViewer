import { createSlice } from "@reduxjs/toolkit";
import { fetchTasksList } from "./tasksThunk";

export interface TasksSlice {
  list: [];
  fullList: [];
  selectedCompetitionName: string;
  loadingList: Boolean;
  names: [];
}

const initialState: TasksSlice = {
  list: [],
  fullList: [],
  selectedCompetitionName: "All",
  loadingList: false,
  names: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setSelectedCompetitionName(state, action) {
      state.selectedCompetitionName = action.payload;
      if (action.payload !== "All") {
        state.list = state.fullList.filter(
          (task) => task.title === action.payload
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
      const names = action.payload.map((task) => task.title);
      state.names = ["All"].concat(names);
    });
  },
});

export const { setSelectedCompetitionName } = tasksSlice.actions;

export default tasksSlice.reducer;
