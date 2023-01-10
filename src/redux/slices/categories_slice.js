import {createSlice} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: undefined,
    categoriesStatus: 'loading',
  },
  reducers: {
    categoriesLoaded: (state, action) => {
      state.categoriesStatus = 'loaded';
      state.categories = action.payload;
    },
  },
});

export const {categoriesLoaded} = categoriesSlice.actions;

export const addCategory = (category) => async dispatch => {
  await firestore().collection('categories').add(category)
  .then(()=>{alert('Category has been added successfully')})
  let imageRef = storage().ref(`categories/${ref.id}.jpg`);
  await imageRef.putFile(plant.image);
  const url = await imageRef.getDownloadURL();
  await firestore().collection('categories').doc(ref.id).update({image: url})
  
};

export const fetchCategories = () => async dispatch => {
  firestore()
    .collection('categories')
    .onSnapshot(querySnapshot => {
      let categories = [];

      let docs = querySnapshot.docs;
      for (let doc of docs) {
        categories.push({
          id: doc.id,
          name: doc.get('name'),
          image: doc.get('image'),
        });
      }

      dispatch(categoriesLoaded(categories));
    });
};

export const deleteCategory = category => async dispatch => {
  await firestore().collection('categories').doc(category.id).delete()
  .then(()=>{alert('Category has been deleted successfully')})
};

export const updateCategory = (category) => async dispatch => {
  let ref = firestore().collection('categories').doc(category.id);
  await ref.update(category)
  .then(()=>{alert('Category has been updated successfully')})
};

export default categoriesSlice.reducer;
