import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Dropdown from "./../common/Dropdown";

import { setSelectedCompetitionName } from "../../store/slices/tasks/tasksSlice";
import { fetchCompetitionsList } from "../../store/slices/competitions/competitionsThunk";

export default function TasksFilter() {
  const competitionNames = useSelector(
    (state: RootState) => state.competitions.names
  );
  const selectedCompetitionName = useSelector(
    (state: RootState) => state.tasks.selectedCompetitionName
  );
  const dispatch = useDispatch();

  const setCompetitionName = (selectedOption) => {
    dispatch(setSelectedCompetitionName(selectedOption));
  };

  useEffect(() => {
    if (competitionNames.length === 0) {
      dispatch(fetchCompetitionsList());
    }
  });

  return (
    <div style={{ paddingBottom: "10px", display: "flex" }}>
      <h5 style={{ paddingRight: "20px", paddingTop: "4px" }}>
        Selected competition:
      </h5>
      <Dropdown
        options={competitionNames}
        title={selectedCompetitionName}
        action={setCompetitionName}
      />
    </div>
  );
}
