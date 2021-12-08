import {Box} from '@mui/material';
import React, {FC} from 'react';
import bgImg from './images/1.png';

const styles = {
  backgroundImage: `url(${bgImg})`,
  height: '100%', width: '100%', backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
};


const App: FC = () => {
  return (
    <Box sx={styles}>

    </Box>
  );
};
;

export default App;
