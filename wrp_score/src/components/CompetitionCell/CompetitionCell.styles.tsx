import { SxProps, Theme } from '@mui/material';

export const styles = {
  box: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    '& :hover': {
      cursor: 'pointer',
    },
  },
  boxReady: ({ palette }: Theme) => ({
    backgroundColor: palette.secondary.light,
  }),
  boxFail: ({ palette }: Theme) => ({
    backgroundColor: palette.error.light,
  }),
  boxSuccess: ({ palette }: Theme) => ({
    backgroundColor: palette.success.light,
  }),
  input: {
    ml: 1,
    flex: 1,
    '& input[type=number]': {
      '-moz-appearance': 'textfield',
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  },
  divider: { height: 28, m: 0.5 },
};
