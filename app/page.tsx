'use client';

import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Box, Typography } from '@mui/material';
import LoginForm from '@/components/loginForm';
import UpdateButton from '@/components/updateButton';

export default function Home() {
  const token = useSelector((state: RootState) => state.user.token);
  console.log(token);
  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {token ? 'Welcome' : 'Login'}
      </Typography>
      {token ? <UpdateButton /> : <LoginForm />}
    </Box>
  );
}