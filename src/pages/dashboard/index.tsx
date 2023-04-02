import {
  TextField,
  Container,
  Paper,
  IconButton,
  Divider,
  InputBase,
} from '@mui/material';
import React from 'react';
import Palette from '../../palette';
import SearchIcon from '@mui/icons-material/Search';

const Dashboard = () => {
  return (
    <Container maxWidth="xl">
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Google Maps"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Container>
  );
};

export default Dashboard;

//   <Paper
//     component="form"
//     sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
//   >
//     <InputBase
//       sx={{ ml: 1, flex: 1 }}
//       placeholder="Search Google Maps"
//       inputProps={{ 'aria-label': 'search google maps' }}
//     />
//     <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

//     <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
//       <SearchIcon />
//     </IconButton>
//   </Paper>
