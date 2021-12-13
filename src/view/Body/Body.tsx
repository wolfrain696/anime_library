import * as React from 'react';
import {styled} from '@mui/material/styles';
import {
  Box, LinearProgress,
} from '@mui/material';
import {MemoViewCard} from './ViewCard/ViewCard';
import {useAppDispatch, useAppSelector} from '../../hooks/ReduxHooks';
import {useEffect} from 'react';
import {getAnimeData} from '../../modal/modalSearchAnime';
import {Route, Routes} from 'react-router-dom';
import {AnimePage} from './AnimePage';
import {getCurrentPage} from '../../store/Reducers/PageReducer';

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
  const {currentPage} = useAppSelector((state) => state.animePage);
  const {animeData, loading} = useAppSelector((state) => state.search);

  const Cards = animeData?.map((el) => (

    <MemoViewCard key={el.id}
      img={el.attributes.posterImage.small}
      title={el.attributes.titles.en}
      startDate={el.attributes.startDate}
      id={el.id}
      element={el}
      onPage={(element) => dispatch(getCurrentPage(element))}
    />

  ));

  useEffect(() => {
    dispatch(getAnimeData());
  }, []);

  return (
    <BodyContainer>
      { loading &&
      <div style={{position: 'absolute', left: 0, top: 0, width: '100%'}}>
        <LinearProgress/>
      </div>
      }

      <Routes>
        <Route path={'/anime_library'} element={<>{Cards}</>}/>

        {currentPage &&
        <Route path={'/anime_library/:title'} element={
          <AnimePage
            description={currentPage.attributes.description}
            img={currentPage.attributes.posterImage.small}
            title={currentPage.attributes.titles.en}
            startDate={currentPage.attributes.startDate}
            episodeCount={currentPage.attributes.episodeCount}
            youTubeId={currentPage.attributes.youtubeVideoId}
          />
        }/>
        }
      </Routes>
    </BodyContainer>
  );
};
