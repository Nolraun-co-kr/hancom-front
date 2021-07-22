import { combineReducers } from 'redux';
import reference from './reference';
import usecase from './usecase';

const rootReducer = combineReducers({
  reference,
  usecase,
});

export default rootReducer;
