import { Box, Button, Grid, TextField, MenuItem } from '@mui/material';
import { Formik } from 'formik';
import {
  // useGetParticipantsQuery,
  useRegisterNewParticipantMutation,
} from '../../modules/participantsApi';
import { initialParticipant, IParticipant } from '../../dto/participant.dto';
import { registrationFields } from './RegForm.fields';
import { nanoid } from '@reduxjs/toolkit';

export type TNewParticipant = Omit<IParticipant, 'id' | 's1' | 's2' | 's3'>;

const RegForm = () => {
  const [registerNew] = useRegisterNewParticipantMutation();
  // const { data: participantsList } = useGetParticipantsQuery({});

  const onSubmit = async (participant: TNewParticipant) => {
    await registerNew({
      ...initialParticipant,
      ...participant,
      id: nanoid(),
    });
  };

  return (
    <>
      <Formik onSubmit={onSubmit} initialValues={initialParticipant}>
        {({ handleSubmit, handleChange }) => (
          <>
            <Grid container rowSpacing={2} columnSpacing={2}>
              {registrationFields.map(
                ({ inputProps, values, ...rest }, index) => (
                  <Grid key={index} item xs={12} sm={6} md={3}>
                    <TextField
                      {...rest}
                      onChange={handleChange}
                      InputProps={{
                        ...(typeof inputProps === 'object' ? inputProps : {}),
                      }}
                      sx={{ width: '100%' }}
                    >
                      {Boolean(rest.select) &&
                        values?.map(({ value, label }) => (
                          <MenuItem key={value} value={value}>
                            {label}
                          </MenuItem>
                        ))}
                    </TextField>
                  </Grid>
                )
              )}
            </Grid>
            <Box textAlign="end" sx={{ mt: 1 }}>
              <Button variant="contained" onClick={() => handleSubmit()}>
                Register
              </Button>
            </Box>
          </>
        )}
      </Formik>
    </>
  );
};

export default RegForm;
