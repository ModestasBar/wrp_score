import { SxProps, Theme } from '@mui/material';

export const styles: Record<string, SxProps<Theme>> = {
  tableHead: ({ palette }) => ({
    backgroundColor: palette.common.black,
    color: palette.common.white,
    fontSize: 14,
  }),
  tableCell: {
    fontSize: 14,
  },
  tableRow: ({ palette }) => ({
    '&.MuiTableRow-root': {
      ':nth-of-type(odd)': {
        backgroundColor: palette.action.hover,
      },
    },
    '& :last-child td, &:last-child th': {
      border: 0,
    },
  }),
};
