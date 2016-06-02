import React, { Component } from 'react';
import {
	View, 
	DrawerLayoutAndroid,
	Navigator,
	StyleSheet,
	BackAndroid,
	ToastAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Toolbar from './Toolbar';
import NavigationView from './NavigationView';
import Home from './Home';
import About from './About';
import ChapterView from './ChapterView';

const ROUTES = {
	home: Home,
	about: About,
	chapterview: ChapterView
};

class App extends Component {
	constructor(props) {
		super(props);

		BackAndroid.addEventListener('hardwareBackPress', () => {
			if (this.navigator.getCurrentRoutes().length === 1  ) {
     		return false;
  		}
		  this.navigator.pop();
		  return true;
		});

		this.state = {
			route: {},
			navigator: {},
			drawer: {}
		};
	}

	render() {
		return(

			<DrawerLayoutAndroid 
				ref='drawer'
				drawerWidth={256} 
				renderNavigationView={this._renderNavigationView.bind(this)}>
				<Navigator 
					style={styles.container}
					initialRoute={{name: 'home'}}
					renderScene={this._renderScene.bind(this)}
					configureScene={this._configureScene.bind(this)}>
				</ Navigator>
			</DrawerLayoutAndroid>
		);
	}

	_renderNavigationView() {
		return (
			<NavigationView
				drawer={this.refs.drawer} 
				route={this.route} 
				navigator={this.navigator}/>
		);
	}

	_renderScene(route, navigator) {
		const Component = ROUTES[route.name];
		route['drawer'] = this.refs.drawer;
		this.route = route;
		this.navigator = navigator;
		return (
			<Component 
				route={route} 
				navigator={navigator}
				drawerState={this.state} />
		);
	}

	_configureScene(route, routeStack) {
		return {
			...Navigator.SceneConfigs.PushFromRight,
			gestures: {}
		};
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default App;