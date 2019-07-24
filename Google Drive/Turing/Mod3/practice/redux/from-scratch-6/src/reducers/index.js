import { combineReducers } from 'react-redux';
import { dataReducer } from './dataReducer';

export const rootReducer = combineReducers({
  data: dataReducer,
})