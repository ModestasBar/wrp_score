import { SxProps, Theme, CSSObject } from '@mui/material';
const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const drawerWidth = 240;

export const useSx = (open: boolean): Record<string, SxProps<Theme>> => ({
  drawerHeader: ({ spacing, mixins }: Theme) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: spacing(0, 1),
    // necessary for content to be below app bar
    ...mixins.toolbar,
  }),
  drawer: (theme: Theme) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '& .MuiPaper-root': {
      position: 'absolute',
    },
    ...(Boolean(open) && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open
      ? {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        }
      : {}),
  }),
});
