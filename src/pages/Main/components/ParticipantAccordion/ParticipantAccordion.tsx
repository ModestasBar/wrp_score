import { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Paper,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IParticipant } from '../../../../dto/participant.dto';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

interface IProps {
  participant: IParticipant;
}

const ParticipantAccordion: React.FC<IProps> = ({ participant }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleExpand = () => setExpanded(!expanded);

  return (
    <Accordion
      key={participant.id}
      expanded={expanded}
      onChange={() => handleExpand()}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Grid container>
          <Grid item xs={12} sm={4}>
            {participant.name} {participant.surname}
          </Grid>
          <Grid item xs={12} sm={8}>
            <Stack direction="row" justifyContent="space-evenly" spacing={2}>
              <Box>
                <b>Category:</b> {participant.classCategory}
              </Box>
              <Box>
                <b>Total points:</b> {participant.total}
              </Box>
              <Box>
                <b>Position:</b> {participant.place}
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails sx={{ backgroundColor: '#f7f7f7', paddingTop: '0' }}>
        <Divider />
        <Grid container spacing={2} pt={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={2} sx={{ width: '100%', height: '100%' }}>
              <Stack
                alignItems="stretch"
                justifyContent="center"
                spacing={2}
                sx={{ height: '100%' }}
              >
                <Box sx={{ textAlign: 'center' }} pt={1}>
                  Competition name
                </Box>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-around"
                >
                  <Box display="flex" justifyItems="center">
                    <DoneIcon color="success" />
                    <Box ml={0.5}>S_1: 12</Box>
                  </Box>
                  <Box display="flex" justifyItems="center">
                    <DoneIcon color="success" />
                    <Box ml={0.5}>S_2: 12</Box>
                  </Box>
                  <Box display="flex" justifyItems="center">
                    <CloseIcon color="error" />
                    <Box ml={0.5}>S_1: 12</Box>
                  </Box>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="flex-end"
                  pb={1}
                  pr={1}
                  spacing={2}
                >
                  <Box display="flex" justifyItems="center">
                    <Box ml={0.5}>Total points: 12</Box>
                  </Box>
                  <Box display="flex" justifyItems="center">
                    <Box ml={0.5}>Place: 1</Box>
                  </Box>
                </Stack>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={2} sx={{ width: '100%', height: '100%' }}>
              <Stack
                alignItems="stretch"
                justifyContent="center"
                spacing={2}
                sx={{ height: '100%' }}
              >
                <Box sx={{ textAlign: 'center' }} pt={1}>
                  Competition name
                </Box>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-around"
                >
                  <Box display="flex" justifyItems="center">
                    <DoneIcon color="success" />
                    <Box ml={0.5}>S_1: 12</Box>
                  </Box>
                  <Box display="flex" justifyItems="center">
                    <DoneIcon color="success" />
                    <Box ml={0.5}>S_2: 12</Box>
                  </Box>
                  <Box display="flex" justifyItems="center">
                    <CloseIcon color="error" />
                    <Box ml={0.5}>S_1: 12</Box>
                  </Box>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="flex-end"
                  pb={1}
                  pr={1}
                  spacing={2}
                >
                  <Box display="flex" justifyItems="center">
                    <Box ml={0.5}>Total points: 12</Box>
                  </Box>
                  <Box display="flex" justifyItems="center">
                    <Box ml={0.5}>Place: 1</Box>
                  </Box>
                </Stack>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={2} sx={{ width: '100%', height: '100%' }}>
              <Stack
                alignItems="stretch"
                justifyContent="center"
                spacing={2}
                sx={{ height: '100%' }}
              >
                <Box sx={{ textAlign: 'center' }} pt={1}>
                  Competition name
                </Box>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-around"
                >
                  <Box display="flex" justifyItems="center">
                    <DoneIcon color="success" />
                    <Box ml={0.5}>S_1: 12</Box>
                  </Box>
                  <Box display="flex" justifyItems="center">
                    <DoneIcon color="success" />
                    <Box ml={0.5}>S_2: 12</Box>
                  </Box>
                  <Box display="flex" justifyItems="center">
                    <CloseIcon color="error" />
                    <Box ml={0.5}>S_1: 12</Box>
                  </Box>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="flex-end"
                  pb={1}
                  pr={1}
                  spacing={2}
                >
                  <Box display="flex" justifyItems="center">
                    <Box ml={0.5}>Total points: 12</Box>
                  </Box>
                  <Box display="flex" justifyItems="center">
                    <Box ml={0.5}>Place: 1</Box>
                  </Box>
                </Stack>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default ParticipantAccordion;
