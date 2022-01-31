
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import TopHeight from 'expo-contants';



export default function App() {
	return (
		<View style={{ flex: 1, marginTop: TopHeight.statusBarHeight,}}>

			<Home />
			<Search />

		</View>
	);
}
