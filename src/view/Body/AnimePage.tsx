import React from 'react';
import {Box, Paper, Typography} from '@mui/material';

type Props = {
  img: string,
  title: string,
  startDate: string,
  episodeCount: number
}


export const AnimePage = ({img, title, startDate, episodeCount}: Props) => {
  return (
    <Box sx={{display: 'flex', width: '100%'}}>
      <Paper sx={{marginRight: '40px'}}>
        <img style={{
          display: 'block',
          width: '100%',
        }} src={img}/>
      </Paper>
      <Box>
        <Typography variant={'h3'}>
          {title}
        </Typography>
        <Typography variant={'subtitle2'}>
         Start date: {startDate}
        </Typography>
        <Typography variant={'subtitle1'}>
         Episode count: {episodeCount}
        </Typography>
      </Box>
    </Box>
  );
};
