import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {useAppDispatch, useAppSelector} from '../../hooks/ReduxHooks';
import {changeValueSearch} from './SearchReducer';
import {
  MediaIconButton,
  SearchIconWrapper,
  StyledInputBase,
  Search,
} from './HeaderStyled';
import {getAnimeData} from '../../modal/modalSearchAnime';


export const Header = () => {
  const {value} = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  const changeValue = (e : React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeValueSearch(e.target.value));
  };

  const searchAnime = (e : React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(getAnimeData(value));
    }
  };

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static" sx={{
        background: 'linear-gradient(90deg, #f598a8, #f6edb2)',
      }}>
        <Toolbar>
          <MediaIconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{mr: 2}}
          >
            <MenuIcon/>
          </MediaIconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
          >
          Anime Library
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              onChange={changeValue}
              onKeyUp={searchAnime}
              value={value}
              placeholder="Search…"
              inputProps={{'aria-label': 'search'}}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
