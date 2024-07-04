import {combineReducers} from 'redux';
import {addNoteReducer} from './NoteReducer';

const appReducer = combineReducers({
  addNoteReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
