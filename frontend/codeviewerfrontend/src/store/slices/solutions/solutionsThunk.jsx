import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { backendPath } from "../../../utils/utils";

export const fetchSolutionsList = createAsyncThunk(
  "solutions/fetchSolutionsList",
  async (args, thunkAPI) => {
    return await axios
      .get(backendPath + "/solution/list", {
        params: {
          series: args,
        },
      })
      .then((res) => {
        return res.data;
      });
  }
);
