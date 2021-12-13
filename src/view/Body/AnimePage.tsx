import React from 'react';
import {Box, buttonUnstyledClasses, Container, Paper, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom';
import {ExitButton} from './styled';


type Props = {
  img: string,
  title: string,
  startDate: string,
  episodeCount: number
  youTubeId: string
  description: string
}


export const AnimePage = ({img, title, startDate, episodeCount, description, youTubeId}: Props) => {
  return (
    <Container sx={{paddingBottom: '34px'}}>
      <ExitButton to={'/anime_library'}>
        <ArrowBackIcon/>
      </ExitButton>
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
      {youTubeId && <Box marginTop={4}>
        <iframe width="100%" height="400" src={`https://www.youtube.com/embed/${youTubeId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </Box>}
      <Typography marginTop={4} variant={'body2'}>
        {description}
      </Typography>
    </Container>
  );
};
