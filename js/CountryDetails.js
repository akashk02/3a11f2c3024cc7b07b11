import React, { Component } from 'react';
import { View, Text, Pressable, Image, FlatList } from 'react-native';
import { Card } from 'native-base';
import { TextInput } from 'react-native-paper';
import { SvgCssUri } from 'react-native-svg';

export default class CountryDetails extends Component {
  state = { countryList: this.props.route.params.countries };

  renderItems = ({ item }) => {
    const { capital, population, latlng, flag } = item;
    return (
      <Card>
        <Pressable
          style={{ flexDirection: 'row' }}
          onPress={() => {
            alert('hi');
          }}>
          <View style={{ borderWidth: 2, flex: 1.5, padding: 8 }}>
            {/* <Image
              style={{ width: '100%', aspectRatio: 1 }}
              source={{
                uri: 'https://restcountries.eu/data/gin.svg',
              }}
              resizeMode="contain"
            /> */}
            <SvgCssUri
              width="100%"
              uri="https://restcountries.eu/data/gin.svg"
            />
          </View>

          <View
            style={{
              borderWidth: 2,
              flex: 3,
              padding: 8,
              justifyContent: 'center',
            }}>
            <Text>Capital : Delhi</Text>
            <Text>Population : 43590400 </Text>
            <Text>Latitude : -34</Text>
            <Text>Longitude : -24</Text>
          </View>
        </Pressable>
      </Card>
    );
  };

  render() {
    console.log('state = ', this.state);
    return (
      <View style={{ padding: 16 }}>
        <FlatList
          data={this.state.countryList}
          renderItem={this.renderItems}
          keyExtractor={(item) => item.area}
        />
      </View>
    );
  }
}
