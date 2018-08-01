import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Login from './components/views/Login';
import Home from './components/views/Home';
import ItemDetailView from './components/views/ItemDetailView';

const App = createStackNavigator({
	Login: { screen: Login },
	Home: { screen: Home },
	ItemDetail: { screen: ItemDetailView }
},
{
	navigationOptions: {
		header:null,
	},
	cardStyle: {
		backgroundColor: '#f2f2f2'
	}
});

export default App;