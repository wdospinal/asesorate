import { combineReducers } from 'redux';
import userReducer from './user';
import greadesReducer from './grades';

const rootReducer = combineReducers({
  userState: userReducer,
  gradesState: greadesReducer,
});

export default rootReducer;