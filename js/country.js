import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input } from 'native-base';
import { TextInput, Button } from 'react-native-paper';
import debounce from 'lodash.debounce';
export default class country extends Component {
  state = {
    country: '',
  };

  handleOnSubmit = () => {
    this.fetchData();
  };

  fetchData = () => {
    console.log('fetchData');
    fetch(`https://restcountries.eu/rest/v2/name/${this.state.country}`)
      .then((response) => response.json())
      .then((res) => {
        console.log('res =', res);
        this.props.navigation.navigate('CountryDetails', { countries: res });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  fetchNextData = debounce(this.fetchData, 2000);

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 16,
        }}>
        <TextInput
          style={{ width: '100%' }}
          label="Enter Country"
          value={this.state.country}
          onChangeText={(text) => {
            this.setState({ country: text });
          }}
        />
        <Button
          onPress={this.handleOnSubmit}
          style={{ margin: 16 }}
          disabled={this.state.country.length === 0}>
          Submit
        </Button>
      </View>
    );
  }
}
