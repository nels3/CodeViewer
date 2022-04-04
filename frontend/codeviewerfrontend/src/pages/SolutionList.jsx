import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import SolutionsFilter from "../components/filters/SolutionsFilter";
import Table from "../components/common/Table";

import { RootState } from "../store/store";
import { fetchSolutionsList } from "../store/slices/solutions/solutionsThunk";

export default function SolutionList() {
  const solutionsList = useSelector((state: RootState) => state.solutions.list);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `Solutions`;
    if (solutionsList.length === 0) {
      dispatch(fetchSolutionsList());
    }
  }, []);

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
    },
  ];

  return (
    <div style={{ padding: "10px" }}>
      <SolutionsFilter />
      <Table columns={columns} data={solutionsList} />
    </div>
  );
}
