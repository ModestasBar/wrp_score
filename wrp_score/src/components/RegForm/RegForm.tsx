import { Box, Button, Grid, TextField, MenuItem } from '@mui/material';
import { Formik } from 'formik';
import {
  useGetParticipantsQuery,
  useRegisterNewParticipantMutation,
} from '../../api/participantsApi';
import { registrationFields } from './fields';

const RegForm: React.FC = () => {
  const [registerNew, result] = useRegisterNewParticipantMutation();
  const { data } = useGetParticipantsQuery({});

  return (
    <>
      <Formik
        onSubmit={async (newParticipant) =>
          await registerNew({ ...newParticipant, id: Number(data.length) + 1 })
        }
        initialValues={{}}
      >
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
                        values.map(({ value, label }: any) => (
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
