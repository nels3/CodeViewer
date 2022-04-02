import { createSlice } from "@reduxjs/toolkit";
import { fetchSeriesList } from "./seriesThunk";

export interface SeriesSlice {
  list: [];
  loadingList: Boolean;
  names: [];
}

const initialState: SeriesSlice = {
  list: [],
  loadingList: true,
  names: [],
};

export const seriesSlice = createSlice({
  name: "series",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSeriesList.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loadingList = false;
      const names = action.payload.map((series) => series.name);
      state.names = ["All"].concat(names);
    });
  },
});

export const {} = seriesSlice.actions;

export default seriesSlice.reducer;
