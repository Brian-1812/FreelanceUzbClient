import { combineReducers } from 'redux';
import jobReducer from './JobReducer';
import loaderReducer from './LoaderReducer'
import filterReducer from './FilterReducer'
import authReducer from './AuthReducer'

const RootReducer = combineReducers({
  jobs: jobReducer,
  loader: loaderReducer,
  filters: filterReducer,
  auth: authReducer,
});

export default RootReducer;
