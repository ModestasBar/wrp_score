export const styles = {
  resultsColumn: {
    '&.MuiGrid-item': {
      paddingTop: 1,
    },
  },
  tableCell: {
    '&.MuiTableCell-head': {
      backgroundColor: 'black',
      color: 'white',
    },
    '& ': {
      fontSize: 14,
    },
  },
  tableRow: {
    '&:nth-of-type(odd)': {
      // backgroundColor: 'gray',
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  },
};
