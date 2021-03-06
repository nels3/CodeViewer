import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { backendPath } from "../../../utils/utils";

export const fetchCompetitionsList = createAsyncThunk(
  "competitions/fetchCompetitionsList",
  async (args, thunkAPI) => {
    return await axios
      .get(backendPath + "/competition/list", {
        params: {
          series: args,
        },
      })
      .then((res) => {
        return res.data;
      });
  }
);
