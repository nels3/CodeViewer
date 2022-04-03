import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "../components/common/Table";
import CompetitionsFilter from "../components/CompetitionsFilter";

import { RootState } from "../store/store";
import { fetchCompetitionsList } from "../store/slices/competitions/competitionsThunk";

export default function CompetitionList() {
  const competitionSeries = useSelector(
    (state: RootState) => state.competitions.competitionSeries
  );
  const competitionList = useSelector(
    (state: RootState) => state.competitions.list
  );
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `Competitions`;
    if (competitionList.length === 0) {
      dispatch(fetchCompetitionsList(competitionSeries));
    }
  }, []);

  const columns = [
    {
      Header: "Name",
      accessor: "name",
      width: 150,
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
      Header: "Series",
      accessor: "series",
      width: 80,
    },
    {
      Header: "Tasks",
      accessor: "tasks_count",
      width: 80,
    },
  ];

  return (
    <div style={{ padding: "10px" }}>
      <CompetitionsFilter />
      <Table columns={columns} data={competitionList} />
    </div>
  );
}
