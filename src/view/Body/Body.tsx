import * as React from 'react';
import {styled} from '@mui/material/styles';
import {
  Box,
} from '@mui/material';
import {modalData} from '../../modal/rawData';
import {ViewCard} from './ViewCard/ViewCard';
import {useAppSelector} from '../../hooks/ReduxHooks';

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


export const Body = () => {
  const {animeData} = useAppSelector((state) => state.search);
  const Cards = animeData.map((el) => (
    <ViewCard key={el.id} img={el.attributes.posterImage.small}
      title={el.attributes.titles.en}
      startDate={el.attributes.startDate}
      id={el.id}/>
  ));

  return (
    <BodyContainer>
      {Cards}
    </BodyContainer>
  );
};
