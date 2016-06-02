import React, {Component} from 'react';
import {
	DrawerLayoutAndroid
} from 'react-native';

export default class Drawer export Component {

	render() {
		return(
			<DrawerLayoutAndroid 
				ref='drawer'
				drawerWidth={256} 
				renderNavigationView={() => <NavigationView navigator={_navigator} drawer={this.refs.drawer}/>}>
				<Toolbar opendrawer={this._openDrawer.bind(this)} />
				<Navigator 
					initialRoute={{name: 'Home', index: 0}}
					renderScene={this._renderScene.bind(this)}
				/>
			</DrawerLayoutAndroid>
		);
	}
}