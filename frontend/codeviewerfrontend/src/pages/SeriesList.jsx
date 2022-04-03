import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import Table from "../components/common/Table";

import { RootState } from "../store/store";
import { fetchSeriesList } from "../store/slices/series/seriesThunk";
import { setCompetitionSeries } from "../store/slices/competitions/competitionsSlice";

export default function SeriesList() {
  const seriesList = useSelector((state: RootState) => state.series.list);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `Series`;
    if (seriesList.length === 0) {
      dispatch(fetchSeriesList());
    }
  });

  const setSelectedSeries = (e, selectedOption) => {
    dispatch(setCompetitionSeries(selectedOption));
  };

  const columns = [
    {
      Header: "Name",
      accessor: "name",
      Cell: ({ cell: { value } }) => (
        <Link onClick={(e) => setSelectedSeries(e, value)} to="/competition">
          {value}
        </Link>
      ),
    },
    {
      Header: "Link",
      accessor: "link",
      Cell: ({ cell: { value } }) => (
        <a target="_blank" href={value} rel="noreferrer">
          {value}
        </a>
      ),
    },
    {
      Header: "Competitions",
      accessor: "competitions_count",
    },
    {
      Header: "Tasks",
      accessor: "tasks_count",
    },
  ];

  return (
    <div style={{ padding: "10px" }}>
      <Table columns={columns} data={seriesList} />
    </div>
  );
}
