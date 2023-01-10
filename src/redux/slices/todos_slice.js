import {createSlice} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: undefined,
    done: undefined,
    todosStatus: 'loading',
    doneStatus: 'loading',
  },
  reducers: {
    todosLoaded: (state, action) => {
      state.todosStatus = 'loaded';
      state.todos = action.payload;
    },
    doneLoaded: (state, action) => {
      state.doneStatus = 'loaded';
      state.done = action.payload;
    },
  },
});

export const {todosLoaded, doneLoaded} = todosSlice.actions;

export const initializeAllTodos = () => async dispatch => {
  firestore()
    .collection('todos')
    .onSnapshot(querySnapshot => {
      let todos = [];

      let docs = querySnapshot.docs;
      for (let doc of docs) {
        todos.push({
          id: doc.id,
          task: doc.get('task'),
        });
      }

      dispatch(todosLoaded(todos));
    });

  firestore()
    .collection('done')
    .onSnapshot(querySnapshot => {
      let done = [];

      let docs = querySnapshot.docs;
      for (let doc of docs) {
        done.push({
          id: doc.id,
          task: doc.get('task'),
        });
      }

      dispatch(doneLoaded(done));
    });
};

export const addTodo = todo => async dispatch => {
  let ref = await firestore().collection('todos').add(todo)
  .then(()=>{alert('Task has been added successfully')})
};

export const deleteDone = done => async dispatch => {
  let ref = await firestore().collection('done').doc(done.id).delete()
  .then(()=>{alert('Task has been deleted successfully')})
};

export const deleteTodo = todo => async dispatch => {
  let ref = await firestore().collection('todos').doc(todo.id).delete()
  .then(()=>{alert('Task has been deleted successfully')})
};

export const markTodoAsDone = todo => async dispatch => {
  let ref = await firestore().collection('todos').doc(todo.id).delete();
  await firestore().collection('done').add(todo)
  .then(()=>{alert('Task has been done')})
};

export default todosSlice.reducer;
