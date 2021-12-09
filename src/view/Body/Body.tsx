import * as React from 'react';
import {styled} from '@mui/material/styles';
import {
  Box,
  Card,
  CardActionArea,
  CardContent, SxProps,
  Typography,
} from '@mui/material';
import {modalData} from '../../modal/rawData';

const BodyContainer = styled(Box)(({theme}) => ({
  backgroundColor: 'white',
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%),' +
    ' 0px 4px 5px 0px rgb(0 0 0 / 14%),' +
    ' 0px 1px 10px 0px rgb(0 0 0 / 12%)',
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
}));

const cardStyle : SxProps = {
  actionArea: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
};


export const Body = () => {
  const Cards = modalData.data.map((el) => (
    <Card key={el.id} sx={{flex: '0 0 32.5%'}}>
      <CardActionArea sx={cardStyle.actionArea}>
        <img src={el.attributes.posterImage.small}
          style={{display: 'block', width: '100%'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {el.attributes.titles.en}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Start date : {el.attributes.startDate}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ));

  return (
    <BodyContainer>
      {Cards}
    </BodyContainer>
  );
};
