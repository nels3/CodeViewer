import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { backendPath } from '../../../utils/utils'

export const fetchCompetitionsList = createAsyncThunk(
  'series/fetchCompetitionsList',
  async (args, thunkAPI) => {
    let series = ''

    return await axios
      .get(backendPath + '/competition/list', {
        params: {
          series: args
        }
      })
      .then(res => {
        return res.data
      })
  }
)
