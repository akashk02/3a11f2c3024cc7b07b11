/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text } from 'react-native';
import Country from './js/country';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CountryDetails from './js/CountryDetails';
const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Country"
            component={Country}
            options={{ headerShown: false }}
          />

          <Stack.Screen name="CountryDetails" component={CountryDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
