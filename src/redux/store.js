import {configureStore} from '@reduxjs/toolkit';

import categoriesReducer from './slices/categories_slice';
import todosReducer from './slices/todos_slice';
import plantsReducer from './slices/plants_slice';

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    todos: todosReducer,
    plants: plantsReducer,
  },
});
