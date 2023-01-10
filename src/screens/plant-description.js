import React, {useState} from 'react';
import {ScrollView, Text, Image, View, TouchableOpacity} from 'react-native';

import {goBack, navigate} from '../navigation_service';

export default Description = ({route}) => {
  let plant = route.params;

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{backgroundColor: 'white', height: 60}}>
        <View style={{height: 55, marginBottom: 0, flexDirection: 'row'}}>
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
              marginTop: 10,
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
            marginBottom: 0,
            height: 40,
            flexDirection: 'row',
          }}>
           <TouchableOpacity onPress={goBack}>
            <Image
              source={require('../../assets/images/b3.jpg')}
              style={{
                width: 25,
                height: 25,
                backgroundColor: 'green',
                marginLeft: '25%',
                borderWidth: 1,
                marginTop: 5,
              }}></Image>
          </TouchableOpacity>
          <Text
            style={{
              color: 'green',
              fontSize: 25,
              marginLeft: -40,
              textAlign: 'center',
              flex: 1,
            }}>
            {plant.name}
          </Text>
          
        </View>
      </View>

      <Text
        style={{
          width: '90%',
          borderWidth: 0,
          borderColor: 'green',
          height: 0,
          color: 'black',
          marginTop: '11%',
          fontSize: 15,
          marginBottom: -16,
          marginLeft: '5%',
          paddingLeft: 30,
          paddingBottom: 16,
        }}></Text>

      <ScrollView style={{height: 'auto'}}>
        <View style={{marginTop: -5, width: 350, height: 'auto'}}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 25,
              paddingTop: 8,
              paddingLeft: 20,
            }}>
            Image:
          </Text>
          <Image
            source={{uri: plant.image}}
            style={{
              width: 325,
              height: 325,
              backgroundColor: 'green',
              marginLeft: '6%',
              marginTop: 10,
            }}></Image>

          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 25,
              paddingTop: 8,
              paddingLeft: 20,
            }}>
            Name:
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              paddingTop: 2,
              paddingLeft: 25,
            }}>
            {plant.name}
          </Text>

          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 25,
              paddingTop: 8,
              paddingLeft: 20,
            }}>
            Description:
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              paddingTop: 2,
              paddingLeft: 25,
            }}>
            {plant.description}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
