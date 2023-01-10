import {
  Modal,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {updateCategory} from '../redux/slices/categories_slice';

export function EditCategoryModal({visible, setVisible, category}) {
  const dispatch = useDispatch();

  return (
    <Modal transparent={true} visible={visible}>
      <View style={{flex: 1, backgroundColor: '#000000aa'}}>
        <View
          style={{
            marginTop: 50,
            marginBottom: 170,
            marginLeft: 35,
            borderWidth: 1,
            borderColor: 'green',
            flex: 1,
            backgroundColor: '#ffffff',
            borderRadius: 8,
            width: 300,
          }}>
          <Text
            style={{
              fontSize: 30,
              marginLeft: 0,
              backgroundColor: 'green',
              fontWeight: 'bold',
              color: 'white',
              borderRadius: 8,
              height: 60,
              paddingLeft: 55,
              paddingTop: 10,
            }}>
            Edit Category
          </Text>
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
              multiline={true}
              style={{
                width: '68%',
                borderWidth: 1,
                borderColor: 'green',
                height: 40,
                color: 'black',
                marginTop: '3%',
                fontSize: 12,
                borderBottomRightRadius: 20,
                marginBottom: 4,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderTopLeftRadius: 20,
                marginLeft: '2%',
                paddingTop: 10,
                paddingLeft: 30,
                paddingBottom: 0,
              }}>
            {category.name}</TextInput>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: '68%',
                borderWidth: 1,
                borderColor: 'green',
                height: 200,
                color: 'black',
                marginTop: '3%',
                fontSize: 12,
                borderBottomRightRadius: 20,
                marginBottom: 4,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderTopLeftRadius: 20,
                marginLeft: '18%',
                paddingLeft: 30,
                paddingBottom: 16,
              }}>
              <Image
                source={{uri: category.image}}
                style={{
                  width: 180,
                  backgroundColor: '#000000aa',
                  height: 180,
                  marginLeft: -20,
                  borderWidth: 1,
                  marginTop: 10,
                }}></Image>
            </View>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 95,
                borderWidth: 2,
                borderColor: 'green',
                fontWeight: 'bold',
                color: 'green',
                borderRadius: 8,
                height: 40,
                width: 130,
                paddingLeft: 15,
                paddingTop: 10,
              }}>
              Select image
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              dispatch(updateCategory({...category, name: 'a new one'}));
              setVisible(false);
            }}>
            <Text
              style={{
                fontSize: 20,
                marginLeft: 106,
                backgroundColor: 'green',
                fontWeight: 'bold',
                color: 'white',
                borderRadius: 8,
                height: 40,
                width: 110,
                paddingLeft: 40,
                paddingTop: 5,
                marginTop: 25,
              }}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
