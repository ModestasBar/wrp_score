import { SxProps, Theme } from '@mui/material';

export const styles: Record<string, SxProps<Theme>> = {
  tableHead: ({ palette }) => ({
    backgroundColor: palette.common.black,
    color: palette.common.white,
    fontSize: 14,
  }),
  tableCell: {
    fontSize: 14,
    border: '1px solid #e0e0e0',
  },
  numericCell: {
    border: '1px solid #e0e0e0',
    width: '0px',
  },
  deleteCell: {
    border: '1px solid #e0e0e0',
    '&.MuiTableCell-root.MuiTableCell-body': {
      width: '0px',

      '& svg': {
        color: '#d16969',

        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
  },
};
