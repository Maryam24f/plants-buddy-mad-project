import {useState} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {EditModal} from './edit_modal';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {deleteDone} from '../redux/slices/todos_slice';
import {useDispatch} from 'react-redux';

export function SampleDoneItem({done}) {
  const dispatch = useDispatch();

  return (
    <View
      style={{
        width: '80%',
        borderWidth: 1,
        borderColor: 'green',
        height: 60,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        paddingLeft: 20,
        paddingBottom: 10,
        marginVertical: 5,
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
          paddingLeft: 10,
          flex: 5,
        }}>
        {done.task}
      </Text>

      <TouchableOpacity onPress={() => dispatch(deleteDone(done))}>
        <Icon
          name="delete"
          size={30}
          type="material"
          style={{
            width: 34,
            height: 34,
            color: 'green',
            marginTop: 10,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
