import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Dropdown from "./common/Dropdown";

import { setCompetitionSeries } from "../store/slices/competitions/competitionsSlice";
import { fetchSeriesList } from "../store/slices/series/seriesThunk";

export default function CompetitionsFilter() {
  const seriesNames = useSelector((state: RootState) => state.series.names);
  const selectedSeries = useSelector(
    (state: RootState) => state.competitions.competitionSeries
  );
  const dispatch = useDispatch();

  const setSelectedSeries = (selectedOption) => {
    dispatch(setCompetitionSeries(selectedOption));
  };

  useEffect(() => {
    if (seriesNames.length === 0) {
      dispatch(fetchSeriesList());
    }
  });

  return (
    <div style={{ paddingBottom: "10px", display: "flex" }}>
      <h5 style={{ paddingRight: "20px", paddingTop: "4px" }}>
        Selected series:
      </h5>
      <Dropdown
        options={seriesNames}
        title={selectedSeries}
        action={setSelectedSeries}
      />
    </div>
  );
}
