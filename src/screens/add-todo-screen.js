import {Modal, TouchableOpacity, View, Text, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {goBack} from '../navigation_service';
import {addTodo} from '../redux/slices/todos_slice';
import * as RootNavigation from '../navigation_service';
import React, {useState} from 'react';
export function AddTodoScreen({route}) {
  const {original} = route.params;

  const dispatch = useDispatch();

  const [name, setName] = useState(original?.task ?? '');
 
  function checkAndAddTask() {
    if (name.length == 0) {
      alert('Please enter title of the task');
    } else {
      const taskObject = {
        task: name,
      };

      if (original == undefined) {
        dispatch(addTodo(taskObject));
      } 

      goBack();
    }
  }
  return (
    <View
      style={{
        borderColor: 'green',
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 8,
      }}>
      <Text
        style={{
          minWidth: '100%',
          fontSize: 30,
          backgroundColor: 'green',
          fontWeight: 'bold',
          color: 'white',
          height: 60,
          textAlign: 'center',
          paddingVertical: 8,
        }}>
         {original == undefined ? 'Add task' : 'Edit task'}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            borderRadius: 8,
            height: 60,
            paddingLeft: 25,
            paddingTop: 15,
          }}>
          Task:
        </Text>
        <TextInput
         value={name}
         onChangeText={setName}
          style={{
            width: '68%',
            borderWidth: 1,
            borderColor: 'green',
            height: 40,
            color: 'black',
            marginTop: '3%',
            fontSize: 12,
            borderRadius: 20,
            marginBottom: 4,
            marginLeft: '2%',
            paddingLeft: 30,
            paddingBottom: 16,
          }}></TextInput>
      </View>

      <TouchableOpacity
        onPress={checkAndAddTask}>
        <Text
          style={{
            fontSize: 20,
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
           {original == undefined ? 'Add' : 'Edit'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
