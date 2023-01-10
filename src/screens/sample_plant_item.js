import {TouchableOpacity, View, Image, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {navigate} from '../navigation_service';
import {deletePlant} from '../redux/slices/plants_slice';

export function SamplePlantItem({plant}) {
  const dispatch = useDispatch();

  return (
    <View style={{width: 400 , marginBottom:-20}}>
      <TouchableOpacity onPress={() => navigate('PlantDescription', plant)}>
        <View
          style={{
            width: '80%',
            backgroundColor: 'green',
            marginVertical: 20,
            fontSize: 15,
            borderRadius: 20,
            marginHorizontal: 20,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: 20,
            paddingVertical: 15,
          }}>
          <Image
            source={{uri: plant.image}}
            style={{
              width: 45,
              height: 45,
              backgroundColor: 'green',
              borderRadius:20
            }}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              flex: 1,
              marginLeft: 15,
            }}>
            {plant.name}
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigate('AddPlant', {
                categoryId: plant.categoryId,
                original: plant,
              })
            }>
             <Icon
                name="edit"
                size={30}
                type="material"
                style={{
                  width: 34,
                  height: 34,
                  marginLeft: 0,
                  color: 'white',
                  marginTop: 10,
                }}
              />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => dispatch(deletePlant(plant))}>
          <Icon
                name="delete-forever"
                size={30}
                type="material"
                style={{
                  width: 34,
                  height: 34,
                  marginLeft: 0,
                  color: 'white',
                  marginTop: 10,
                }}
              />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}
