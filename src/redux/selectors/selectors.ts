import {RootState} from '../store';
import {createSelector} from 'reselect';

const getThemeSelect = (state: RootState) => state.user.theme;

const getTheme = createSelector([getThemeSelect], theme => {
  return theme;
});

export const Selectors = {
  getTheme,
};
