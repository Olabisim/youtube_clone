import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import TopHeight from 'expo-constants';
import VideoPlayer from './src/screens/VideoPlayer'
import Explore from './src/screens/Explore'
import Subscribe from './src/screens/Subscribe'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator()

const RootHome = () => {
	return (

		<Tabs.Navigator>
			<Tabs.Screen name="home" component={Home} />
			<Tabs.Screen name="explore" component={Explore} />
			<Tabs.Screen name="subscribe" component={Subscribe} />
		</Tabs.Navigator>
	)
}


export default function App() {
	return (

		<NavigationContainer>
			<Stack.Navigator headerMode="none">

				<Stack.Screen
					name="rootHome"
					component={RootHome}
					options={{ title: 'Welcome' }}
				/>
				<Stack.Screen 
					name="search" 
					component={Search} 
				/>
				<Stack.Screen 
					name="video" 
					component={VideoPlayer} 
				/>

			</Stack.Navigator>
		</NavigationContainer>

	);
}






// <View style={{ flex: 1, marginTop: TopHeight.statusBarHeight,}}>

// <Home />
// <Search />

// </View>