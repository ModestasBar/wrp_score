import {
  Box,
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  ListItemAvatar,
  Avatar,
} from '@mui/material';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import FlagIcon from '@mui/icons-material/Flag';
import CategoryIcon from '@mui/icons-material/Category';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

import { styles } from './SidebarControl.styles';
import { useState } from 'react';

const SidebarControl = () => {
  const [open, setOpen] = useState(false);

  const selectFields = [
    {
      icon: InboxIcon,
      label: 'Game',
      menuItems: [
        {
          value: 'game1',
          text: 'Game1',
        },
        {
          value: 'game2',
          text: 'Game 2',
        },
        {
          value: 'game2',
          text: 'Game 2',
        },
        {
          value: 'game2',
          text: 'Game 2',
        },
      ],
    },
    {
      icon: InboxIcon,
      label: 'Category',
      menuItems: [
        {
          value: 'category 1',
          text: 'Category 1',
        },
        {
          value: 'category2',
          text: 'Category 2',
        },
      ],
    },
  ];

  return (
    <Drawer variant="permanent" sx={styles.drawer}>
      <Divider />
      <Typography variant="h5" align="center" sx={{ p: '15px' }}>
        Settings
      </Typography>
      <Divider />
      <Box p={1}>
        {selectFields.map(({ menuItems, label, icon: Icon }, index) => (
          <Box display="flex" key={index} alignItems="center" mt={2}>
            <FormControl sx={{ width: '100%' }} size="small">
              <InputLabel>{label}</InputLabel>
              <Select label={label}>
                {menuItems.map(({ text, value }, index) => (
                  <MenuItem key={index} value={value}>
                    {text}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        ))}
        <InputLabel sx={{ marginTop: '16px' }}>Attempt</InputLabel>
        <ToggleButtonGroup color="primary" value="s1" fullWidth>
          <ToggleButton value="s1">S1</ToggleButton>
          <ToggleButton value="s2">S2</ToggleButton>
          <ToggleButton value="s3">S3</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Typography variant="h6" align="left" sx={{ p: '10px' }}>
        Details
      </Typography>
      <Divider sx={{ marginBottom: '16px' }} />
      <List dense disablePadding>
        <ListItem>
          <ListItemAvatar title="Game">
            <Avatar sx={{ bgcolor: '#03a9f4' }}>
              <FitnessCenterIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Game 1" />
        </ListItem>
      </List>
      <List dense disablePadding>
        <ListItem>
          <ListItemAvatar title="Category">
            <Avatar sx={{ bgcolor: '#03a9f4' }}>
              <CategoryIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Category 1" />
        </ListItem>
      </List>
      <List dense disablePadding>
        <ListItem>
          <ListItemAvatar title="Attempt">
            <Avatar sx={{ bgcolor: '#03a9f4' }}>
              <FlagIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="S1" />
        </ListItem>
      </List>
      <Typography variant="h6" align="left" sx={{ p: '10px' }}>
        Queue
      </Typography>
      <Divider sx={{ marginBottom: '16px' }} />
      <List dense disablePadding>
        <ListItem sx={{ padding: '0 16px' }}>
          <ListItemText primary="Now" secondary="Modestas Baranauskas" />
        </ListItem>
        <ListItem sx={{ padding: '0 16px' }}>
          <ListItemText primary="Next" secondary="Antanas Baranauskas" />
        </ListItem>
        <ListItem sx={{ padding: '0 16px' }}>
          <ListItemText primary="Getting ready" secondary="Erikas Dovydenas" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SidebarControl;
