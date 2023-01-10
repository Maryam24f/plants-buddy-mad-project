import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import SampleCheckListItem from './sample_checklist_item';

const Checklist = () => {
  const dispatch = useDispatch();

  const todos = useSelector(state => state.todos.todos);
  const todosStatus = useSelector(state => state.todos.todosStatus);

  if (todos == undefined) {
    dispatch(initializeAllTodos());
  }

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
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
          Notifications
        </Text>
      </View>

      {todosStatus == 'loading' ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={todos}
          renderItem={({item}) => <SampleCheckListItem todo={item} />}
          style={{marginTop: 20}}
        />
      )}
    </View>
  );
};

export default Checklist;
