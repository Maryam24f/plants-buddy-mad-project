import {useState} from 'react';
import {TouchableOpacity, View, Text, TextInput, Image, ScrollView} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {goBack} from '../navigation_service';
import {addPlant, updatePlant} from '../redux/slices/plants_slice';

export function AddPlantScreen({route}) {
  const {categoryId, original} = route.params;

  const dispatch = useDispatch();

  const [name, setName] = useState(original?.name ?? '');
  const [description, setDescription] = useState(original?.description ?? '');
  const [image, setImage] = useState(original?.image ?? undefined);

  async function selectImage() {
    const result = await launchImageLibrary({quality: 0.5});
    const selectedImage = result.assets[0].uri;
    setImage(selectedImage);
  }

  function checkAndAddPlant() {
    if (name.length == 0) {
      alert('Please enter name of the plant');
    } else if (description.length == 0) {
      alert('Please enter description of the plant');
    } else if (image == undefined) {
      alert('Please select an image of the plant');
    } else {
      const plantObject = {
        name: name,
        description: description,
        image: image,
      };

      if (original == undefined) {
        dispatch(addPlant(categoryId, plantObject));
      } else {
        dispatch(updatePlant(categoryId, {...plantObject, id: original.id}));
      }

      goBack();
    }
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
    }}
     >
      <Text
        style={{
          fontSize: 30,
          minWidth: '100%',
          backgroundColor: 'green',
          fontWeight: 'bold',
          color: 'white',
          height: 60,
          textAlign: 'center',
          paddingTop: 8,
        }}>
        {original == undefined ? 'Add Plant' : 'Edit plant'}
      </Text>
      <ScrollView >
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          minWidth: '100%',
          color: 'black',
          paddingLeft: 25,
          paddingTop: 15,
        }}>
        Name:
      </Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={{
          width: '70%',
          marginHorizontal: 50,
          borderWidth: 1,
          borderColor: 'green',
          height: 40,
          color: 'black',
          marginTop: '3%',
          fontSize: 16, paddingTop:2,
          borderRadius: 20,
          paddingLeft: 30,
          paddingBottom: 16,
        }}></TextInput>

      <Text
        style={{
          fontSize: 20,
          minWidth: '100%',
          fontWeight: 'bold',
          color: 'black',
          borderRadius: 8,
          height: 60,
          paddingLeft: 25,
          paddingTop: 15,
        }}>
        Description:
      </Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        style={{
          width: '78%',marginHorizontal: 50,
          borderWidth: 1,
          borderColor: 'green',
          height: 100,
          color: 'black',
          marginTop: -16,
          fontSize: 16,
          borderRadius: 20,
          marginBottom: 4,
          paddingLeft: 30,
          paddingBottom: 70,
        }}></TextInput>

      <View
        style={{
          width: '68%',
          borderWidth: 1,
          borderColor: 'green',
          height: 200,marginHorizontal: 60,
          color: 'black',
          marginTop: '3%',
          fontSize: 12,
          borderRadius: 20,
          marginBottom: 4,
          paddingLeft: 30,
          paddingBottom: 16,
        }}>
        <Image
          source={{uri: image}}
          style={{
            width: 180,
            backgroundColor: '#000000aa',
            height: 180,
            marginTop: 10,
          }}
        />
      </View>

      <TouchableOpacity onPress={selectImage}>
        <Text
          style={{
            fontSize: 20,
            borderWidth: 1,
            borderColor: 'green',
            fontWeight: 'bold',
            color: 'green',
            borderRadius: 8,
            height: 40, marginHorizontal: 110,
            width: 140,
            marginTop: 0,
            paddingLeft: 15,
            paddingTop: 5,
          }}>
          Select image
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={checkAndAddPlant}>
        <Text
          style={{
            fontSize: 20,
            backgroundColor: 'green',
            fontWeight: 'bold',
            color: 'white',
            borderRadius: 8,marginHorizontal: 130,
            height: 40,
            width: 110,
            textAlign: 'center',
            paddingTop: 5,
            marginTop: 25,
          }}>
          {original == undefined ? 'Add' : 'Update'}
        </Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
