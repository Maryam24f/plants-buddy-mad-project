import React, {useState} from 'react';

import {Text, Image, View, ActivityIndicator, FlatList} from 'react-native';

import {SampleCategoryItem} from './sample_category_item';
import {FAB} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategories} from '../redux/slices/categories_slice';
import {EmptyList} from './empty-item';
import * as RootNavigation from '../navigation_service';

const Categories = ({navigation}) => {
  const categories = useSelector(state => state.categories.categories);
  const status = useSelector(state => state.categories.categoriesStatus);

  const dispatch = useDispatch();

  if (categories == undefined) {
    dispatch(fetchCategories());
  }

  return (
    <View style={{backgroundColor: 'white', height: '100%', flex:1}}>
      <View style={{height: 55, flexDirection: 'row'}}>
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
            marginTop: 0,
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
        }}>
        <Text style={{color: 'green', fontSize: 25, textAlign: 'center'}}>
          Categories
        </Text>
      </View>

      {status == 'loading' ? (
        <ActivityIndicator />
      ) : categories.length != 0 ? (
      
        <FlatList
         contentContainerStyle={{marginLeft:-8}}
          data={categories} 
          numColumns={2}
          renderItem={({item}) => 
          <SampleCategoryItem category={item} />
     
        } />
      ) : (
        <EmptyList item="category"></EmptyList>
      )}

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
        onPress={() => RootNavigation.navigate('AddCategory', {categoryId: categories.id})}
      />
    </View>
  );
};
export default Categories;
