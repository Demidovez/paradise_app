import {IAction, IArticle} from '../../types/types';
import Actions from '../actions/types/libaryActionTypes';

interface IDataState {
  articles: IArticle[];
}

const initialState: IDataState = {
  articles: [],
};

const libraryReducer = (state = initialState, action: IAction): IDataState => {
  switch (action.type) {
    case Actions.SET_ARTICLES:
      return {
        ...state,
        articles: action.payload.data,
      };

    default:
      return state;
  }
};

export default libraryReducer;
