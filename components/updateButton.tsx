import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { updateStart, updateSuccess, updateFailure } from '../store/updateSlice';
import axios from 'axios';
import { Button, Typography } from '@mui/material';

const UpdateButton: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state: RootState) => state.update);
  const { token } = useSelector((state: RootState) => state.user);
  console.log('Token User', token);

  const handleUpdate = async () => {
    if (!token) {
      dispatch(updateFailure('Unauthorized'));
      return;
    }

    dispatch(updateStart());
    try {
      await axios.post('/api/update-user-data', {}, {
        headers: {
          Authorization: token,
        },
      });
      dispatch(updateSuccess());
    } catch (error) {
      dispatch(updateFailure('Update failed'));
    }
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleUpdate} disabled={loading}>
        {loading ? 'Updating...' : 'Update Data'}
      </Button>
      {success && <Typography color="primary">Update Successful!</Typography>}
      {error && <Typography color="error">{error}</Typography>}
    </div>
  );
};

export default UpdateButton;
