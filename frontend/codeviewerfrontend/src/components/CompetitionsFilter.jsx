import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Dropdown from "./common/Dropdown";

import { setCompetitionSeries } from "../store/slices/competitions/competitionsSlice";
import { fetchSeriesList } from "../store/slices/series/seriesThunk";

export default function CompetitionsFilter() {
  const series_names = useSelector((state: RootState) => state.series.names);
  const selected_series = useSelector(
    (state: RootState) => state.competitions.competitionSeries
  );
  const dispatch = useDispatch();

  const setSelectedSeries = (selectedOption) => {
    dispatch(setCompetitionSeries(selectedOption));
  };

  useEffect(() => {
    document.title = `Series`;
    if (series_names.length === 0) {
      dispatch(fetchSeriesList());
    }
  });

  return (
    <div style={{ paddingBottom: "10px", display: "flex" }}>
      <h5 style={{ paddingRight: "20px", paddingTop: "4px" }}>
        Selected series:
      </h5>
      <Dropdown
        options={series_names}
        title={selected_series}
        action={setSelectedSeries}
      />
    </div>
  );
}
