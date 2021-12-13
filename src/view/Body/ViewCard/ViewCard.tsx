import * as React from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  styled,
  SxProps,
  Typography,
} from '@mui/material';
import {memo} from 'react';
import {Link} from 'react-router-dom';
import {PageType} from '../../../store/Reducers/PageReducer';


const cardStyle : SxProps = {
  actionArea: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
};

type viewCard = {
  img: string
  title: string
  startDate: string
  id: string
  element: PageType
  onPage: (element: PageType) => void
}

const CardContainer = styled(Card)(({theme}) => ({
  flex: '0 0 32.5%',
  [theme.breakpoints.down('md')]: {
    flex: '0 0 100%',
    height: '350px',
    overflow: 'hidden',
  },
}));

const AnimeImage = styled(Box)(({theme}) => ({
  overflow: 'hidden',
  width: '100%',
  height: '80%',
}));


export const ViewCard = ({img, title, startDate, id, element, onPage} : viewCard) => {
  return (
    <CardContainer onClick={() => onPage(element)} id={id}>
      <Link style={{textDecoration: 'none', color: 'black'}} to={'/anime_library/' + title}>
        <CardActionArea sx={cardStyle.actionArea}>
          <AnimeImage >
            <img src={img}
              style={{display: 'block', width: '100%'}}
            />
          </AnimeImage>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Start date : {startDate}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </CardContainer>


  );
};

export const MemoViewCard = memo(ViewCard);
