import {
  List,
  Divider,
  ListItem,
  ListItemText,
  Typography,
  ListItemAvatar,
  Avatar,
} from '@mui/material';

import FlagIcon from '@mui/icons-material/Flag';
import CategoryIcon from '@mui/icons-material/Category';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { useAppSelector } from '../../../hooks/store.hooks';

const SectionDetails = () => {
  const detailsListConfig = [
    {
      title: 'Game',
      icon: FitnessCenterIcon,
      primaryText: useAppSelector((store) => store.competitionDetails.gameName),
    },
    {
      title: 'Category',
      icon: CategoryIcon,
      primaryText: useAppSelector((store) => store.competitionDetails.category),
    },
    {
      title: 'Attempt',
      icon: FlagIcon,
      primaryText: useAppSelector((store) => store.competitionDetails.attempt),
    },
  ];

  return (
    <>
      <Typography variant="h6" align="left" sx={{ p: '10px' }}>
        Details
      </Typography>
      <Divider sx={{ marginBottom: '16px' }} />
      {detailsListConfig.map(({ title, icon: Icon, primaryText }, index) => (
        <List key={index} dense disablePadding>
          <ListItem>
            <ListItemAvatar title={title}>
              <Avatar sx={{ bgcolor: '#03a9f4' }}>
                <Icon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={primaryText} />
          </ListItem>
        </List>
      ))}
    </>
  );
};

export default SectionDetails;
