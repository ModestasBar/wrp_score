import { SxProps, Theme } from '@mui/material';

const drawerWidth = 200;

export const styles: Record<string, SxProps<Theme>> = {
  drawerHeader: ({ spacing, mixins, palette }: Theme) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: spacing(0, 1),
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

    '& .MuiDrawer-paper': {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      overflowX: 'hidden',
    },
  }),
};
