import { GridColumns } from '@mui/x-data-grid'

export const columns: GridColumns = [
  { field: 'name', headerName: 'Name', width: 150, sortable: false },
  {
    sortable: false,
    field: 'division',
    headerName: 'Division',
    width: 150,
    editable: true
  },
  {
    sortable: false,
    field: 'class',
    headerName: 'Class',
    width: 150,
    editable: true
  },
  {
    field: 's1',
    cellClassName: 'lift-attempt',
    headerName: 'S1',
    type: 'number',
    width: 100,
    editable: true
  },
  {
    field: 's2',
    cellClassName: 'lift-attempt',
    headerName: 'S2',
    type: 'number',
    width: 100,
    editable: true
  },
  {
    field: 's3',
    cellClassName: ({ row }: any) => {
      console.log(row.liftStatus)
      if (row.liftStatus === null) {
        return ''
      }

      if (row.liftStatus as boolean) {
        return 'success-lift'
      }

      return 'failed-lift'
    },
    headerName: 'S3',
    type: 'number',
    width: 100,
    editable: true
  },
  {
    sortable: false,
    field: 'points',
    cellClassName: 'lift-result',
    headerName: 'Points',
    type: 'number',
    width: 100,
    editable: true
  },
  {
    sortable: false,
    field: 'total',
    cellClassName: 'lift-result',
    headerName: 'Total',
    type: 'number',
    width: 100,
    editable: true
  },
  {
    sortable: false,
    field: 'place',
    cellClassName: 'lift-result',
    headerName: 'Place',
    type: 'number',
    width: 100,
    editable: true
  }
]
