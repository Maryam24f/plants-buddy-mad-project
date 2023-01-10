import React, {useState} from 'react';

import {goBack, navigate} from '../navigation_service';

import {
  Text,
  Image,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {SamplePlantItem} from './sample_plant_item';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPlants} from '../redux/slices/plants_slice';
import {EmptyList} from './empty-item';
import {FAB} from 'react-native-paper';

const PlantsList = ({route}) => {
  let category = route.params;

  const plants = useSelector(state => state.plants.plants);
  const status = useSelector(state => state.plants.status);
  const categoryId = useSelector(state => state.plants.categoryId);

  const dispatch = useDispatch();

  if (categoryId != category.id) {
    dispatch(fetchPlants(category.id));
  }

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{height: '100%'}}>
        <View style={{height: 55, marginBottom: 0, flexDirection: 'row'}}>
          <Image
            source={require('../../assets/images/l2.png')}
            style={{
              width: 50,
              backgroundColor: 'white',
              height: 45,
              marginLeft: '4%',
              marginTop: 10,
            }}></Image>
          <Text
            style={{
              color: 'green',
              fontSize: 25,
              fontWeight: 'bold',
              height: 40,
              marginTop: 10,
              paddingTop: 10,
            }}>
            Plants Buddy
          </Text>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'green',
            height: 40,
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={goBack}>
            <Image
              source={require('../../assets/images/b3.jpg')}
              style={{
                width: 25,
                height: 25,
                backgroundColor: 'green',
                marginLeft: '25%',
                borderWidth: 1,
                marginTop: 5,
              }}></Image>
          </TouchableOpacity>
          <Text style={{color: 'green', fontSize: 25, paddingLeft: -10}}>
            {category.name}
          </Text>
        </View>

        {status == 'loading' ? (
          <ActivityIndicator />
        ) : plants.length != 0 ? (
          <FlatList
            data={plants}
            renderItem={({item}) => <SamplePlantItem plant={item} />}
          />
        ) : (
          <EmptyList item="plant" />
        )}
      </View>

      <FAB
        style={{
          position: 'absolute',
          margin: 16,
          right: 0,
          backgroundColor: 'green',
          bottom: 0,
        }}
        icon="plus"
        color="white"
        onPress={() => navigate('AddPlant', {categoryId: category.id})}
      />
    </View>
  );
};

export default PlantsList;
