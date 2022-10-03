export const styles = {
  box: {
    p: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  boxReady: {
    backgroundColor: 'yellow'
  },
  boxLock: {
    '& :hover': {
      cursor: 'pointer'
    }
  },
  boxFail: {
    backgroundColor: 'red'
  },
  boxSuccess: {
    backgroundColor: 'green'
  },
  input: {
    ml: 1,
    flex: 1,
    '& input[type=number]': {
      '-moz-appearance': 'textfield'
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    }
  },
  divider: { height: 28, m: 0.5 }
}
