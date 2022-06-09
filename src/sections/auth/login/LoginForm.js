import * as Yup from 'yup';
import { useState } from 'react';
import Swal from 'sweetalert2';
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
  const [inemail, setEmail] = useState('');
  const [passWord, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://127.0.0.1:8000/api/login', {
        email: `${inemail}`,
        password: `${passWord}`,
      })
      .then((res) => {
        console.log('login', res?.data.success);
        if (res?.data.success) {
          navigate('dashboard/app', { replace: true });
        }
      })
      .catch((err) => {
        console.log('err', err);
        Swal.fire({
          title: 'Username or password incorrect',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });
      });
  };

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <TextField fullWidth type="text" label="Email" value={inemail} onChange={(e) => setEmail(e.target.value)} />

        <TextField
          fullWidth
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
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <FormControlLabel
          control={<Checkbox checked={remember} {...label} onChange={(e) => setRemember(e.target.value)} />}
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
    </form>
  );
}
