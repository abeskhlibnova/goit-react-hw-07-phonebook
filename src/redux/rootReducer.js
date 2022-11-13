import { combineReducers } from 'redux';

import contactsReducer from './contacts/contacts-slice1';
import filterReducer from './filter/filter-slice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
