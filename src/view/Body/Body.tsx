import * as React from 'react';
import {styled} from '@mui/material/styles';
import {
  Box, LinearProgress,
} from '@mui/material';
import {MemoViewCard} from './ViewCard/ViewCard';
import {useAppDispatch, useAppSelector} from '../../hooks/ReduxHooks';
import {useEffect} from 'react';
import {getAnimeData} from '../../modal/modalSearchAnime';

const BodyContainer = styled(Box)(({theme}) => ({
  position: 'relative',
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
  const dispatch = useAppDispatch();
  const {animeData, loading} = useAppSelector((state) => state.search);
  const Cards = animeData?.map((el) => (
    <MemoViewCard key={el.id} img={el.attributes.posterImage.small}
      title={el.attributes.titles.en}
      startDate={el.attributes.startDate}
      id={el.id}/>
  ));

  useEffect(() => {
    dispatch(getAnimeData());
  }, []);

  return (
    <BodyContainer>
      { loading &&
        <div style={{position: 'absolute', left: 0, top: 0, width: '100%'}}>
          <LinearProgress/>
        </div>}
      {Cards}
    </BodyContainer>
  );
};
