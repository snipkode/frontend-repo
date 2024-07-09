'use client';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';
import { auth } from '../app/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  useTheme,
} from '@mui/material';

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken();
      const user = userCredential.user;
      dispatch(setUser({ email, token, user }));
      setError('');
    } catch (error) {
      setError('Failed to log in. Please check your credentials.');
    }
  };

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          autoComplete='false'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          autoComplete='false'
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          sx={{ marginTop: theme.spacing(2) }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default LoginForm;
