import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { backendPath } from "../../../utils/utils";

export const fetchTasksList = createAsyncThunk(
  "tasks/fetchTasksList",
  async (args, thunkAPI) => {
    return await axios
      .get(backendPath + "/task/list", {
        params: {
          series: args,
        },
      })
      .then((res) => {
        return res.data;
      });
  }
);
