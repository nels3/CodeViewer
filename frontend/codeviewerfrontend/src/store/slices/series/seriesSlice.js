import { createSlice } from '@reduxjs/toolkit'
import { fetchSeriesList } from './seriesThunk'

export interface SeriesSlice {
  list: [];
  loadingList: Boolean;
}

const initialState: SeriesSlice = {
  list: [],
  loadingList: true
}

export const seriesSlice = createSlice({
  name: 'series',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchSeriesList.fulfilled, (state, action) => {
      state.list = action.payload
      state.loadingList = false
    })
  }
})

export const {} = seriesSlice.actions

export default seriesSlice.reducer
