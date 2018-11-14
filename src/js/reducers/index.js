import { combineReducers } from 'redux';

import SearchReducer from './reducer_yelp_search';

const rootReducer = combineReducers({
    search: SearchReducer
  });

export default rootReducer;
