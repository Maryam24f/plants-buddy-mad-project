import {Text, Image, View} from 'react-native';
export function EmptyList(props) {
  return (
    <View style={{alignItems: 'center', justifyContent:'center'}}>
      <Image  source={require('../../assets/images/empty2.png')}
          style={{
            width: 200,
            backgroundColor: 'white',
            height: 140,
            marginLeft: -10,
            marginTop: 10,
          }}>

      </Image>
      <Text style={{marginTop: 0, marginLeft:-10,
         color: 'grey', fontSize:20}}>
        No {props.item} found
      </Text>
    </View>
  );
}
