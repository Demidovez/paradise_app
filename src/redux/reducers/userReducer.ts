import {IAction, IArticle} from '../../types/types';
import Actions from '../actions/types/libaryActionTypes';

interface IDataState {
  articles: IArticle[];
  theme: any;
}

const initialState: IDataState = {
  articles: [],
  theme: {
    colors: {
      selected: '#000000',
      unselected: '#AEAEAE',
    },
  },
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
