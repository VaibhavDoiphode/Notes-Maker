import AsyncStorage from '@react-native-async-storage/async-storage';
// import {ADD_NOTE, STORE_NOTE, DELETE_NOTE} from '../Redux/Constant';

const initialState = {
  allNotes: [],
};
const addNoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE': {
      AsyncStorage.setItem(
        'notesData',
        JSON.stringify([...state.allNotes, action.data]),
      );
      console.log('Data From REDUCER', action.data);
      return {
        allNotes: [...state.allNotes, action.data],
      };
    }

    case 'STORE_NOTE': {
      // console.log("show data from STORENOTE REDUCER",action.data);
      return {
        ...state,
        allNotes: action.data,
      };
    }

    case 'DELETE_NOTE': {
      return {
        allNotes: [],
      };
    }

    case 'DELETE_SINGLE_NOTE': {
      console.log('Deleted');
      let newTodos = state.allNotes.filter(item => {
        return item.id != action.data;
      });
      AsyncStorage.setItem('notesData', JSON.stringify(newTodos));
      return {
        allNotes: [...newTodos],
      };
    }

    case 'UPDATE_NOTE': {
      console.log('Update Data Action', action.data);
     
      let editNote = state.allNotes.filter(item => {
        return item.id != action.data.id;
      });
      console.log('Update Data', editNote);
      AsyncStorage.setItem('notesData', JSON.stringify([...editNote,{id:action.data.id ,title:action.data.title,description:action.data.description,time:action.data.time}]));
      return {
        allNotes: [...editNote,{id:action.data.id ,title:action.data.title,description:action.data.description,time:action.data.time}],
      };
    }

    default:
      return state;
  }
};

module.exports = {
  addNoteReducer,
};
