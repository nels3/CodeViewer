import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Dropdown from "./../common/Dropdown";

import { setSelectedTaskName } from "../../store/slices/solutions/solutionsSlice";
import { fetchTasksList } from "../../store/slices/tasks/tasksThunk";

export default function SolutionsFilter() {
  const taskNames = useSelector((state: RootState) => state.tasks.names);

  const selectedTaskName = useSelector(
    (state: RootState) => state.solutions.selectedTaskName
  );
  const dispatch = useDispatch();

  const setTaskName = (selectedOption) => {
    dispatch(setSelectedTaskName(selectedOption));
  };

  useEffect(() => {
    if (taskNames.length === 0) {
      dispatch(fetchTasksList());
    }
  });

  return (
    <div style={{ paddingBottom: "10px", display: "flex" }}>
      <h5 style={{ paddingRight: "20px", paddingTop: "4px" }}>
        Selected task:
      </h5>
      <Dropdown
        options={taskNames}
        title={selectedTaskName}
        action={setTaskName}
      />
    </div>
  );
}
