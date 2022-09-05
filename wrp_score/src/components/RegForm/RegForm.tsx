import { Box, Button, Grid, TextField, MenuItem } from "@mui/material";
import { Formik } from "formik";
import { registrationFields } from "./fields";

// First name
// Last name
// Gender
// Birth year
// Body weight
// Class - automatically

const RegForm = () => {
  return (
    <>
      <Formik onSubmit={(values) => console.log(values)} initialValues={{}}>
        {({ handleSubmit, handleChange }) => (
          <>
            <Grid container rowSpacing={2} columnSpacing={2}>
              {registrationFields.map(
                ({ inputProps, values, ...rest }, index) => (
                  <Grid key={index} item xs={12} sm={6} md={3}>
                    <TextField
                      {...rest}
                      onChange={handleChange}
                      InputProps={{ ...(inputProps || {}) }}
                      sx={{ width: "100%" }}
                    >
                      {rest.select &&
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
