import * as React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  SxProps,
  Typography,
} from '@mui/material';


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
  startDate: string,
  id: string
}


export const ViewCard = ({img, title, startDate, id} : viewCard) => {
  return (
    <Card id={id} sx={{flex: '0 0 32.5%'}}>
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
    </Card>

  );
};
