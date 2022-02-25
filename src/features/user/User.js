import React, { useState } from 'react';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, selectUser, updateUser } from '../counter/userSlice';



const User = () => {
  const user = useSelector(selectUser);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(updateUser({ name, email }));
  }

  const handleDelete = () => {
    dispatch(deleteUser());
  }

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <Box sx={{ width: "100%", mb: 2, padding: "1rem" }}>
        <Paper sx={{ width: "100%" }}>
          <Box>
            <Typography
              sx={{ flex: "1 1 100%" }}
              variant="h6"
              id="tableTitle"
              component="div"
              padding="10px"
            >
              Edit User
            </Typography>
          </Box>
          <Paper sx={{ paddingBottom: "10px" }}>
            <Grid
              container
              direction="row"
              alignItems="center"
              padding={1}
              gap={2}
            >
              <Grid item xs={12} lg={1}>
                <Typography variant="body2">Name</Typography>
              </Grid>
              <Grid item xs={12} lg={10}>
                <TextField
                  id="title"
                  name="title"
                  fullWidth
                  variant="outlined"
                  size="small"
                  placeholder={user.name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
            </Grid>

            <Grid
              container
              direction="row"
              alignItems="center"
              gap={2}
              padding={1}
            >
              <Grid item xs={12} lg={1}>
                <Typography variant="body2">Email</Typography>
              </Grid>
              <Grid item xs={12} lg={10}>
                <TextField
                  id="title"
                  name="title"
                  fullWidth
                  variant="outlined"
                  size="small"
                  placeholder={user.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button variant="contained" color="success"
              onClick={handleUpdate}
            >
              Update User
            </Button>
            <Button variant="contained" color="warning"
              onClick={handleDelete}
            >
              Delete User
            </Button>
          </Paper>
        </Paper>
      </Box >
    </div>
  );
};

export default User;