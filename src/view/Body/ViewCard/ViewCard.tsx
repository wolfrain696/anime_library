import * as React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
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


export const ViewCard = ({img, title, startDate, id, element, onPage} : viewCard) => {
  return (
    <Card onClick={() => onPage(element)} id={id} sx={{flex: '0 0 32.5%'}}>
      <Link style={{textDecoration: 'none', color: 'black'}} to={'/anime_library/' + title}>
        <CardActionArea sx={cardStyle.actionArea}>
          <img src={img}
            style={{display: 'block', width: '100%'}}
          />
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
    </Card>


  );
};

export const MemoViewCard = memo(ViewCard);
