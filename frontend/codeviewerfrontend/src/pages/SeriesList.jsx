import { RootState } from '../store/store'
import { fetchSeriesList } from '../store/slices/series/seriesThunk'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Table from '../components/common/Table'

export default function SeriesList () {
  const series_list = useSelector((state: RootState) => state.series.list)
  const dispatch = useDispatch()

  useEffect(() => {
    document.title = `Series`
    if (series_list.length == 0) {
      dispatch(fetchSeriesList())
    }
  }, [])

  const columns = useMemo(() => [
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Link',
      accessor: 'link',
      Cell: ({ cell: { value } }) => (
        <a target='_blank' href={value}>
          {value}
        </a>
      )
    },
    {
      Header: 'Competitions',
      accessor: 'competitions_count',
      width: '100px'
    },
    {
      Header: 'Tasks',
      accessor: 'tasks_count',
      width: '100px'
    }
  ])

  return (
    <div style={{ padding: '10px' }}>
      <Table columns={columns} data={series_list} />
    </div>
  )
}
