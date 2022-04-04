import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import TasksFilter from "../components/filters/TasksFilter";
import Table from "../components/common/Table";

import { RootState } from "../store/store";
import { fetchTasksList } from "../store/slices/tasks/tasksThunk";
import { setSelectedTaskName } from "../store/slices/solutions/solutionsSlice";

export default function TaskList() {
  const tasksList = useSelector((state: RootState) => state.tasks.list);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `Tasks`;
    if (tasksList.length === 0) {
      dispatch(fetchTasksList());
    }
  }, []);

  const setSelectedTask = (e, selectedOption) => {
    dispatch(setSelectedTaskName(selectedOption));
  };

  const columns = [
    {
      Header: "Link",
      accessor: "link",
      Cell: ({ cell: { value } }) => (
        <a target="_blank" href={value} rel="noreferrer">
          Link
        </a>
      ),
    },
    {
      Header: "Title",
      accessor: "title",
    },
    {
      Header: "Short description",
      accessor: "description",
    },
    {
      Header: "Tag",
      accessor: "tag",
    },

    {
      Header: "Competition",
      accessor: "competition",
    },

    {
      Header: "Order",
      accessor: "order",
    },
    {
      Header: "Solutions",
      accessor: "solutions_count",
      Cell: ({ cell: { value }, row }) => (
        <Link
          onClick={(e) => setSelectedTask(e, row.original.title)}
          to="/solutions"
        >
          {value}
        </Link>
      ),
    },
  ];

  return (
    <div style={{ padding: "10px" }}>
      <TasksFilter />
      <Table columns={columns} data={tasksList} />
    </div>
  );
}
