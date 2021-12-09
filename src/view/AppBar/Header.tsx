import * as React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

type Props = {

};
export const Header = (props: Props) => {
  return (
    <AppBar position="static" sx={{
      background: 'linear-gradient(90deg, #f598a8, #f6edb2)'}}>
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu"
          sx={{mr: 2}}>
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          Anime Library
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
