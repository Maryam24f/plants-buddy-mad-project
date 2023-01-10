import {useEffect} from 'react';
import {goBack} from '../navigation_service';
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {
  Modal,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';

import * as RootNavigation from '../navigation_service';
import {addCategory, updateCategory} from '../redux/slices/categories_slice';

export function AddCategoryScreen({route}) {
  const {original} = route.params;

  const dispatch = useDispatch();

  const [name, setName] = useState(original?.name ?? '');
  const [image, setImage] = useState(original?.image ?? undefined);

  async function selectImage() {
    const result = await launchImageLibrary({quality: 0.5});
    const selectedImage = result.assets[0].uri;
    setImage(selectedImage);
  }

  function checkAndAddCat() {
    if (name.length == 0) {
      alert('Please enter name of the Category');
    } else if (image == undefined) {
      alert('Please select an image of the category');
    } else {
      const catObject = {
        name: name,
        image: image,
      };

      if (original == undefined) {
        dispatch(addCategory(catObject));
      } else {
        dispatch(updateCategory( {...catObject, id: original.id}));
      }

      goBack();
    }
  }
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: 'green',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 8,
      }}>
      <Text
        style={{
          minWidth: '100%',
          fontSize: 30,
          backgroundColor: 'green',
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
          height: 60,
          paddingTop: 10,
        }}>
        {original == undefined ? 'Add category' : 'Edit category'}
      </Text>
     <ScrollView>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: 20,
            marginLeft: 0,
            fontWeight: 'bold',
            color: 'black',
            borderRadius: 8,
            height: 60,
            paddingLeft: 25,
            paddingTop: 15,
          }}>
          Name:
        </Text>
        <TextInput
        value={name}
        onChangeText={setName}
          style={{
            width: '60%',
            borderWidth: 1,
            borderColor: 'green',
            height: 40,
            color: 'black',
            marginTop: '3%',
            fontSize: 12,
            borderRadius: 20,
            marginBottom: 4,

            marginLeft: '2%',
            paddingLeft: 30,
            paddingBottom: 16,
          }}></TextInput>
      </View>
      <Text
          style={{
            fontSize: 20,
            marginLeft: 0,
            fontWeight: 'bold',
            color: 'black',
            borderRadius: 8,
            height: 60,
            paddingLeft: 25,
            paddingTop: 15,
          }}>
          Image:
        </Text>

      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'green',
            height: 200, marginHorizontal:60,
            color: 'black',
            marginTop: 0,
            fontSize: 12,
            borderRadius: 20,
            marginBottom: 4,
            paddingHorizontal: 30,
            paddingBottom: 16,
          }}>
          <Image
            source={{uri: image}}
            style={{
              width: 220,
              backgroundColor: '#000000aa',
              height: 180,
              borderWidth: 1,
              marginTop: 10,
            }}></Image>
        </View>
      </View>
      <TouchableOpacity onPress={selectImage}>
        <Text
          style={{
            fontSize: 15,
            borderWidth: 2,
            borderColor: 'green',
            fontWeight: 'bold', marginHorizontal:150,
            color: 'green',
            borderRadius: 8,
            height: 40,
            width: 130,
            paddingLeft: 20,
            paddingTop: 5,
          }}>
          Select image
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={checkAndAddCat}
      >
        <Text
          style={{
            fontSize: 20,
            backgroundColor: 'green',
            fontWeight: 'bold',
            color: 'white',
            borderRadius: 8,  marginHorizontal:160,
            height: 40,
            width: 110, 
            paddingLeft: 20,
            paddingTop: 5,
            marginVertical: 25,
          }}>
           {original == undefined ? 'Add' : 'Update'}
        </Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
