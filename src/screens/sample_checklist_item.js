import {TouchableOpacity, View, Text, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {markTodoAsDone} from '../redux/slices/todos_slice';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default SampleCheckListItem = ({todo}) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity>
      <View
        style={{
          fontSize: 15,
          marginHorizontal: 20,
          marginVertical: 10,
          paddingHorizontal: 20,
          paddingVertical: 5,
          borderRadius: 20,
          display: 'flex',
          alignItems: 'center',
          borderWidth: 1,
          flexDirection: 'row',
          borderColor: 'green',
        }}>
        <Image
          source={require('../../assets/images/n3.png')}
          style={{
            width: 34,
            height: 34,
            backgroundColor: 'green',
          }}
        />

        <Text
          style={{
            flex: 8,
            marginLeft: 20,
            color: 'black',
            fontSize: 20,
          }}>
          {todo.task}
        </Text>

        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => dispatch(markTodoAsDone(todo))}>
         <Icon
                name="check-circle"
                size={30}
                type="material"
                style={{
                  width: 34,
                  height: 34,
                  marginLeft: 0,
                  color: 'green',
                  marginTop: 10,
                }}
              />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
