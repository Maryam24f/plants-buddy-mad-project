import {createSlice} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const plantsSlice = createSlice({
  categoryId: undefined,
  name: 'plants',
  initialState: {
    plants: undefined,
    status: 'loading',
  },
  reducers: {
    plantsLoaded: (state, action) => {
      state.plants = action.payload.plants;
      state.categoryId = action.payload.id;
      state.status = 'loaded';
    },
  },
});

export const {plantsLoaded} = plantsSlice.actions;

export const addPlant = (categoryId, plant) => async dispatch => {
  let ref = await firestore().collection(categoryId).add(plant)
  .then(()=>{alert('Plant has been added successfully')})
  let imageRef = storage().ref(`plants/${ref.id}.jpg`);
  await imageRef.putFile(plant.image);
  const url = await imageRef.getDownloadURL();
  await firestore().collection(categoryId).doc(ref.id).update({image: url});
};

export const updatePlant = (categoryId, plant) => async dispatch => {
  let ref = firestore().collection(categoryId).doc(plant.id);
  await ref.update(plant)
  .then(()=>{alert('Plant has been updated successfully')})

  // if (plant.image != ) {
  //   let imageRef = storage().ref(`plants/${ref.id}.jpg`);
  //   await imageRef.putFile(plant.image);
  //   const url = await imageRef.getDownloadURL();
  //   await firestore().collection(categoryId).doc(ref.id).update({image: url});
  // }
};

export const deletePlant = plant => async dispatch => {
  let ref = await firestore()
    .collection(plant.categoryId)
    .doc(plant.id)
    .delete()
    .then(()=>{alert('Plant has been deleted successfully')})
};

export const fetchPlants = id => async dispatch => {
  firestore()
    .collection(id)
    .onSnapshot(querySnapshot => {
      let plants = [];

      let docs = querySnapshot.docs;
      for (let doc of docs) {
        plants.push({
          id: doc.id,
          categoryId: id,
          name: doc.get('name'),
          description: doc.get('description'),
          image: doc.get('image'),
        });
      }

      dispatch(
        plantsLoaded({
          plants: plants,
          id: id,
        }),
      );
    });
};

export default plantsSlice.reducer;
