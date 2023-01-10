import {useState} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {EditModal} from './edit_modal';

import Icon from 'react-native-vector-icons/MaterialIcons';
import todos from './todos';
import {useDispatch} from 'react-redux';
import {deleteTodo} from '../redux/slices/todos_slice';

export function SampleTodoItem({todo}) {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity>
      <View
        style={{
          width: '80%',
          height: 60, 
          alignSelf: 'center',
          marginVertical: 5,
          borderWidth: 1,
          borderColor: 'green',
          display: 'flex',
          borderRadius: 20,
          flexDirection: 'row',
          paddingLeft: 20,
          paddingBottom: 10,
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/n3.png')}
          style={{
            width: 34,
            height: 34,
            backgroundColor: 'green',
          }}></Image>

        <Text
          style={{
            color: 'black',
            fontSize: 20,
            marginLeft: 15,
            flex: 2,
          }}>
          {todo.task}
        </Text>
        <TouchableOpacity onPress={() => dispatch(deleteTodo(todo))}>
          <Icon
            name="delete"
            size={30}
            type="material"
            style={{
              width: 34,
              flex: 2,
              height: 34,
              color: 'green',
              marginTop: 10,
            }}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
