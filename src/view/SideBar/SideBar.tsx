import * as React from 'react';
import {styled} from '@mui/material/styles';
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/ReduxHooks';
import {getCategories, searchAnimeData} from '../../modal/modalSearchAnime';

const SideBarContainer = styled(Box)(({theme}) => ({
  backgroundColor: 'white',
  padding: `${theme.spacing(1)} 0`,
  color: theme.palette.text.secondary,
  boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%),' +
    ' 0px 4px 5px 0px rgb(0 0 0 / 14%),' +
    ' 0px 1px 10px 0px rgb(0 0 0 / 12%)',
}));


export const SideBar : FC = () => {
  const {categories} = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const searchAnimeFromCategories = (value: string) => {
    dispatch(searchAnimeData([value, 'categories']));
  };
  const showCategories = categories?.data.map((el) => (
    <ListItemButton onClick={() => searchAnimeFromCategories(el.attributes.title)} key={el.id}>
      <ListItemText>
        {el.attributes.title}
      </ListItemText>
    </ListItemButton>
  ));

  return (
    <SideBarContainer>
      <Typography variant={'h5'} sx={{padding: '0 8px'}}>
        Categories
      </Typography>
      <List component="nav" aria-label="secondary mailbox folder">
        {showCategories}
      </List>
    </SideBarContainer>
  );
};
