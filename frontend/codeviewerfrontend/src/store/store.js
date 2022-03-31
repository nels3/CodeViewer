import { configureStore } from '@reduxjs/toolkit'
import seriesReducer from './slices/series/seriesSlice'

export const store = configureStore({
  reducer: {
    series: seriesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
