import { createSlice } from '@reduxjs/toolkit'
import { fetchCompetitionsList } from './competitionsThunk'

export interface CompetitionsSlice {
  list: [];
  competitionSeries: string;
  loadingList: Boolean;
}

const initialState: CompetitionsSlice = {
  list: [],
  competitionSeries: 'All',
  loadingList: true
}

export const competitionsSlice = createSlice({
  name: 'competitions',
  initialState,
  reducers: {
    setCompetitionSeries (state, action) {
      state.competitionSeries = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchCompetitionsList.fulfilled, (state, action) => {
      state.list = action.payload
      state.loadingList = false
    })
  }
})

export const { setCompetitionSeries } = competitionsSlice.actions

export default competitionsSlice.reducer
