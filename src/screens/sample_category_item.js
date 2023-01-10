import {useState} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {EditCategoryModal} from './edit_category_modal';
import {navigate} from '../navigation_service';
import * as NavigationService from '../navigation_service';
import {useDispatch} from 'react-redux';
import {deleteCategory} from '../redux/slices/categories_slice';

export function SampleCategoryItem({category}) {
  const dispatch = useDispatch();
  return (
    <View >
      <View
        style={{
          marginVertical: 20,
          marginHorizontal: 20,
          width: 150,
          borderBottomRightRadius: 5,
          borderBottomLeftRadius: 5,
          flex:1,
        }}>
        <TouchableOpacity
          onPress={() => NavigationService.navigate('PlantsList', category)}>
          <View>
            <Image
              source={{uri: category.image}}
              style={{
                width: 150,
                height: 150,
                borderTopRightRadius: 5,
                borderTopLeftRadius: 5,
              }}
            />

            <Text
              style={{
                height: 40,
                width: 150,
                textAlign: 'center',
                backgroundColor: 'green',
                color: 'white',
                fontSize: 20,
                paddingTop: 6,
                borderBottomRightRadius: 5,
                borderBottomLeftRadius: 5,
              }}>
              {category.name}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => dispatch(deleteCategory(category))}>
            <Image
              source={require('../../assets/images/d3.png')}
              style={{
                width: 30,
                height: 30,
                backgroundColor: 'green',
                marginLeft: '10%',
                marginTop: 3,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigate('AddCategory', {
                //categoryId: category.categoryId,
                original: category,
              })}>
            <Image
              source={require('../../assets/images/e1.png')}
              style={{
                width: 30,
                height: 30,
                backgroundColor: 'green',
                marginLeft: '50%',
                marginTop: 3,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
