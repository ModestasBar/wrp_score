import {
  List,
  Divider,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

const SectionQueue = () => {
  const queueConfig = [
    {
      primaryText: 'Now',
      secondaryText: 'Modestas Baranauskas',
    },
    {
      primaryText: 'Next',
      secondaryText: 'Antanas Baranauskas',
    },
    {
      primaryText: 'Get ready',
      secondaryText: 'Erikas Dovydenas',
    },
  ];

  return (
    <>
      <Typography variant="h6" align="left" sx={{ p: '10px' }}>
        Queue
      </Typography>
      <Divider sx={{ marginBottom: '16px' }} />
      <List dense disablePadding>
        {queueConfig.map(({ primaryText, secondaryText }, index) => (
          <ListItem key={index} sx={{ padding: '0 16px' }}>
            <ListItemText primary={primaryText} secondary={secondaryText} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default SectionQueue;
