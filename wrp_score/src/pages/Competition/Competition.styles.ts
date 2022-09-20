import { SxProps, Theme } from '@mui/material';

export const styles: Record<string, SxProps<Theme>> = {
  resultsColumn: {
    '&.MuiGrid-item': {
      paddingTop: 1,
    },
  },
  tableCell: ({ palette }) => ({
    '&.MuiTableCell-head': {
      backgroundColor: palette.common.black,
      color: palette.common.white,
    },
    '& ': {
      fontSize: 14,
    },
  }),
  tableRow: ({ palette }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }),
};
