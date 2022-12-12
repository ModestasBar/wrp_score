import { Theme } from '@mui/material';

export const styles = {
  box: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  boxReady: ({ palette }: Theme) => ({
    backgroundColor: '#bbe7ff',
  }),
  boxFail: ({ palette }: Theme) => ({
    backgroundColor: '#f79695',
  }),
  boxSuccess: ({ palette }: Theme) => ({
    backgroundColor: '#a9fbad',
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
