import {React, useState} from 'react';

import {Appbar, BottomNavigation} from 'react-native-paper';

import Categories from './categories';
import Todos from './todos';

import CheckList from './check-list';

const renderScene = BottomNavigation.SceneMap({
  categories: () => <Categories />,
  todos: () => <Todos />,
  checklist: () => <CheckList />,
});

export default MainScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'categories',
      title: 'Collection',
      focusedIcon: 'sprout',
      unfocusedIcon: 'sprout-outline',
    },
    {
      key: 'todos',
      title: 'Todos',
      focusedIcon: 'playlist-plus',
      unfocusedIcon: 'playlist-plus',
    },
    {key: 'checklist', title: 'Checklist', 
    focusedIcon: 'order-bool-descending-variant',
    unfocusedIcon: 'order-bool-descending-variant',},
  ]);

  return (
    <BottomNavigation
      
  
    barStyle={{backgroundColor: 'white', 
    borderColor:'green', 
    borderWidth:2, 
    height:90 ,marginBottom:-20, marginTop:-12}}
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};
