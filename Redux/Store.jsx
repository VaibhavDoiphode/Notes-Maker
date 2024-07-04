import {createStore} from 'redux';
import rootReducer from './CombineReducer';

export const configureStore = () => {
  const store = createStore(rootReducer);
  return store;
};
