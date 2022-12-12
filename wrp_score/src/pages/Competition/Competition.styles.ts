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
    '&.MuiTableCell-body': {
      border: '1px solid #e0e0e0',
      padding: '0px 16px',
    },
  }),
};
