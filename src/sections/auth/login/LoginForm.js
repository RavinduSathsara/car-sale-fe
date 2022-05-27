import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import axios from 'axios';
// material
import { Link, Stack, Checkbox, TextField, IconButton, InputAdornment, FormControlLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoggin, setIsLoggin] = useState('');

  const [adName, setAdName] = useState('');
  const [adPassword, seAdPassword] = useState('');

  const [inName, setName] = useState('');

  const [passWord, setPassword] = useState('');

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('User Name is required'),
    password: Yup.string().required('Password is required'),
  });

  // create post
  const createLogin = () => {
    axios
      .post('https://car-sale-be-node.herokuapp.com/users/login', {
        name: inName,
        password: passWord,
      })
      .then((res) => {
        setIsLoggin(res.data);
      });
  };

  const formik = useFormik({
    initialValues: {
      email: 'asda',
      password: 'admin',
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      createLogin();
      if (isLoggin === 'Success') {
        navigate('dashboard/app', { replace: true });
      }

      // navigate('dashboard/app', { replace: true });
      // alert(passWord);
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="User Name"
            value={inName}
            onChange={(e) => setName(e.target.value)}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            value={passWord}
            onChange={(e) => setPassword(e.target.value)}
            // {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          />

          <Link component={RouterLink} variant="subtitle2" to="#" underline="hover">
            Forgot password?
          </Link>
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          // loading={isSubmitting }
        >
          Login
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
