import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, View} from 'react-native';
import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#3F8AE0" />
      <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
        <Routes />
      </View>
    </NavigationContainer>
  );
}
