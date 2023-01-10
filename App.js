import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import firestore from '@react-native-firebase/firestore';
import React, {useState} from 'react';
import {
  Provider as PaperProvider,
  MD3LightTheme as DefaultTheme,
} from 'react-native-paper';

import PlantDescription from './src/screens/plant-description';
import PlantsList from './src/screens/plants-list';
import {navigationRef} from './src/navigation_service';
import MainScreen from './src/screens/main-screen';
import {AddCategoryScreen} from './src/screens/add-category-screen';
import {AddTodoScreen} from './src/screens/add-todo-screen';
import { AddPlantScreen } from './src/screens/add-plant-screen';

const Stack = createNativeStackNavigator();

const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'green',
      secondary: 'green',
      secondaryContainer: '#33883344',
    },
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <PaperProvider theme={theme}>
        <Stack.Navigator
          initialRouteName="MainScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="AddCategory" component={AddCategoryScreen} />
          <Stack.Screen name="PlantDescription" component={PlantDescription} />
          <Stack.Screen name="PlantsList" component={PlantsList} />
          <Stack.Screen name="AddPlant" component={AddPlantScreen} />
          <Stack.Screen name="AddTodo" component={AddTodoScreen} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
};
export default App;
