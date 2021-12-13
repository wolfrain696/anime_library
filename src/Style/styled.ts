import {styled} from '@mui/material/styles';
import {Box, Container, Grid} from '@mui/material';
import bgImg from '../images/1.png';

export const MainAppContainer = styled(Box)(({theme}) => ({
  paddingTop: '64px',
  backgroundImage: `url(${bgImg})`,
  backgroundColor: '#eee6e1',
  width: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundPosition: '-400px -100px',
  [theme.breakpoints.down('md')]: {
    paddingTop: '0',
  },
}));

export const GridItemSideBar = styled(Grid)(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    position: 'absolute',
    zIndex: 10,
    top: 0,
    transition: '0.3s ease all',
  },
}));

export const GridContainer = styled(Grid)(({theme}) => ({
  position: 'relative',
  overflow: 'hidden',
}));

export const CustomContainer = styled(Container)(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    padding: '0',
  },
}));
