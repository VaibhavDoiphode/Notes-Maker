const addNote = data => {
  // console.log('Show Data from ACTION',data);
  const action = {
    type: 'ADD_NOTE',
    data,
  };
  return action;
};

const storeNote = data => {
  // console.log("show data from STORENOTE ACTION",JSON.stringify(data));
  const action = {
    type: 'STORE_NOTE',
    data,
  };
  return action;
};

const deleteNote = data => {
  const action = {
    type: 'DELETE_NOTE',
    data,
  };
  return action;
};

const deleteSingleToDo = data => {
  const action = {
    type: 'DELETE_SINGLE_NOTE',
    data,
  };
  return action;
};

const updateToDo = data => {
  const action = {
    type: 'UPDATE_NOTE',
    data,
  };
  return action;
};

module.exports = {
  addNote,
  storeNote,
  deleteNote,
  deleteSingleToDo,
  updateToDo,
};
