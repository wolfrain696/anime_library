import {Grid} from '@mui/material';
import React, {FC, useState} from 'react';
import {Header} from './view/AppBar/Header';
import {Body} from './view/Body/Body';
import {SideBar} from './view/SideBar/SideBar';
import {CustomContainer, GridContainer, GridItemSideBar, MainAppContainer} from './Style/styled';
import {useAppDispatch, useAppSelector} from './hooks/ReduxHooks';
import {toggleSideBar} from './store/Reducers/ViewReduser';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const {openedSidebar} = useAppSelector((state) => state.view);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  window.onresize = () => setWindowSize(window.innerWidth);

  const StopPropagation = (e : React.BaseSyntheticEvent) => {
    e.stopPropagation();
  };

  const closeSidebar = () => {
    dispatch(toggleSideBar(false));
  };

  return (
    <MainAppContainer onClick={closeSidebar}>
      <CustomContainer maxWidth={'lg'}>
        <Header/>
        <GridContainer container spacing={1}>
          <GridItemSideBar
            onClick={StopPropagation}
            left={openedSidebar ? 0 : '-100%'}
            item xs={windowSize < 900 ? 6 : 3}>
            <SideBar/>
          </GridItemSideBar>
          <Grid item xs={windowSize < 900 ? 12 : 9}>
            <Body/>
          </Grid>
        </GridContainer>
      </CustomContainer>
    </MainAppContainer>
  );
};
;

export default App;
