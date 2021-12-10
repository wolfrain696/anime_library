import {Box, Container, Grid} from '@mui/material';
import React, {FC} from 'react';
import bgImg from './images/1.png';
import {Header} from './view/AppBar/Header';
import {Body} from './view/Body/Body';
import {SideBar} from './view/SideBar/SideBar';

const styles = {
  paddingTop: '64px',
  backgroundImage: `url(${bgImg})`,
  backgroundColor: '#eee6e1',
  width: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundPosition: '-400px -100px',
};


const App: FC = () => {
  return (
    <Box sx={styles}>
      <Container maxWidth={'lg'}>
        <Header/>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <SideBar/>
          </Grid>
          <Grid item xs={9}>
            <Body/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
;

export default App;
