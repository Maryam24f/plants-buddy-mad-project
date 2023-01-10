import React, {useState} from 'react';

import {
  ScrollView,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  View,
} from 'react-native';
import {SampleTodoItem} from './sample_todo_item';
import {AddTodoModal} from './add-todo-modal';
import {FAB} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {initializeAllTodos} from '../redux/slices/todos_slice';
import {SampleDoneItem} from './sample_done_item';
import {EmptyList} from './empty-item';
import * as RootNavigation from '../navigation_service';

export default Todos = () => {
  const [addTodoModalVisible, setAddTodoModalVisible] = useState(false);

  const dispatch = useDispatch();

  const todos = useSelector(state => state.todos.todos);
  const todosStatus = useSelector(state => state.todos.todosStatus);

  const done = useSelector(state => state.todos.done);
  const doneStatus = useSelector(state => state.todos.doneStatus);

  if (todos == undefined || done == undefined) {
    dispatch(initializeAllTodos());
  }

  return (
    <View style={{backgroundColor: 'white', minHeight: '100%', flex:1}}>
      <View style={{flex:1}}>
        <View style={{height: 55, flexDirection: 'row'}}>
          <Image
            source={require('../../assets/images/l2.png')}
            style={{
              width: 50,
              backgroundColor: 'white',
              height: 45,
              marginLeft: '4%',
              marginTop: 10,
            }}
          />
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
            All Todos
          </Text>
        </View>

        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 25,
            paddingTop: 8,
            paddingLeft: 20,
          }}>
          Not Done:
        </Text>

        {todosStatus == 'loading' ? (
          <ActivityIndicator />
        ) : todos.length != 0 ? (
          <FlatList
            data={todos} showsVerticalScrollIndicator={true}
            renderItem={({item}) => <SampleTodoItem todo={item} />}
            
          />
        ) : (
          <EmptyList item="task"></EmptyList>
        )}

        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 25,
            paddingTop: 8,
            paddingLeft: 20,
          }}>
          Done:
        </Text>

        {doneStatus == 'loading' ? (
          <ActivityIndicator />
        ) : done.length != 0 ? (
       
          <FlatList
            persistentScrollbar={true}
            data={done} 
            renderItem={({item}) => <SampleDoneItem done={item} />}
            contentContainerStyle={{}}
            
          />
         
        ) : (
          <EmptyList item="task" />
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
        onPress={() => RootNavigation.navigate('AddTodo', {todoId: todos.id})}
      />
    </View>
  );
};
