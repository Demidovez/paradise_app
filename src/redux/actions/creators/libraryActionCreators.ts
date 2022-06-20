import {IAction, IArticle} from '../../../types/types';
import Actions from '../types/libaryActionTypes';

export const fetchArticlesAction = (): IAction => ({
  type: Actions.FETCH_ARTICLES,
  payload: null,
});

export const setArticlesAction = (data: IArticle[]): IAction => ({
  type: Actions.SET_ARTICLES,
  payload: {data},
});
