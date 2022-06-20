import {combineReducers} from 'redux';
import libraryReducer from './libraryReducer';
import eventsReducer from './eventsReducer';
import userReducer from './userReducer';
import toastReducer from './toastReducer';

const rootReducer = combineReducers({
  library: libraryReducer,
  events: eventsReducer,
  user: userReducer,
  toast: toastReducer,
});

export default rootReducer;
