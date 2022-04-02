import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { backendPath } from "../../../utils/utils";

export const fetchSeriesList = createAsyncThunk(
  "series/fetchSeriesList",
  async (thunkAPI) => {
    return await axios
      .get(backendPath + "/competition/series/list")
      .then((res) => {
        return res.data;
      });
  }
);
