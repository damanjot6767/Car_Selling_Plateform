
import { Card, Checkbox, Grid, MenuItem, TextField } from '@mui/material';
import { Box, styled, useTheme ,Button} from '@mui/material';
import { Paragraph } from '../Typography';
import { Formik } from 'formik';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { dealerLogin } from '../../actions/dealer';
import { userLogin } from '../../actions/user';

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

const ContentBox = styled(Box)(() => ({
  height: '100%',
  padding: '32px',
  position: 'relative',
  background: 'rgba(0, 0, 0, 0.01)'
}));

const JWTRoot = styled(JustifyBox)(() => ({
  background: '#1A2038',
  minHeight: '100% !important',
  '& .card': {
    maxWidth: 800,
    minHeight: 400,
    margin: '1rem',
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center'
  }
}));

// inital login credentials
const initialValues = {
  email: '',
  password: '',
  role: ""
};

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must be 6 character length')
    .required('Password is required!'),
  email: Yup.string().email('Invalid Email address').required('Email is required!'),
  role: Yup.string()
  .required('Role is required!'),
});

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { loader:loader1 } = useSelector(({dealers})=>dealers)
  const { loader } = useSelector(({users})=>users)
  const dispatch = useDispatch()

  const handleFormSubmit = (values) => {
    values.role==="dealer"?dispatch(dealerLogin(values,navigate)):dispatch(userLogin(values,navigate))
  };

  return (
    <JWTRoot>
      <Card className="card">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <JustifyBox p={4} height="100%" sx={{ minWidth: 320 }}>
              <img src="/assets/images/illustrations/dreamer.svg" width="100%" alt="" />
            </JustifyBox>
          </Grid>

          <Grid item sm={6} xs={12}>
            <ContentBox>
              <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
              >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      helperText={touched.email && errors.email}
                      error={Boolean(errors.email && touched.email)}
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      size="small"
                      name="password"
                      type="password"
                      label="Password"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      helperText={touched.password && errors.password}
                      error={Boolean(errors.password && touched.password)}
                      sx={{ mb: 1.5 }}
                    />
                    <TextField
                      select
                      fullWidth
                      size="small"
                      type="text"
                      name="role"
                      label="Role"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.role}
                      onChange={handleChange}
                      helperText={touched.role && errors.role}
                      error={Boolean(errors.role && touched.role)}
                      sx={{ mb: 3 }}
                    >
                    <MenuItem disabled value="">
                     <em>None</em>
                   </MenuItem>
                   <MenuItem value={"dealer"}>Dealer</MenuItem>
                   <MenuItem value={"user"}>User</MenuItem>
                    </TextField>

                    <Button
                      type="submit"
                      color="primary"
                      disabled={loader || loader1?true:false}
                      variant="contained"
                      sx={{ my: 2 }}
                    >
                      Login
                    </Button>

                    <Paragraph>
                      Don't have an account?
                      <NavLink
                        to="signup"
                        style={{ color: theme.palette.primary.main, marginLeft: 5 }}
                      >
                        Register
                      </NavLink>
                    </Paragraph>
                  </form>
                )}
              </Formik>
            </ContentBox>
          </Grid>
        </Grid>
      </Card>
    </JWTRoot>
  );
};

export default Login;