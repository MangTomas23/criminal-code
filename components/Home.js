import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	Navigator,
	ToastAndroid,
	ScrollView
} from 'react-native';

import Toolbar from './Toolbar';
import ChapterList from './ChapterList';

class Home extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Toolbar
					icon='menu'
					title='Home' 
					onPress={this._onIconPress.bind(this)}/>
				<Text style={styles.title}>The Criminal Code of the Philippines</Text>
				<ScrollView>
					<ChapterList {...this.props} />
				</ScrollView>
			</View>
		);
	}	

	_onIconPress() {
		const {drawer} = this.props.route;
		drawer.openDrawer();
	}

	_back() {
		this.props.navigator.pop();
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	title: {
		fontSize: 24,
		fontFamily: 'Verdana',
		textAlign: 'center',
		color: 'crimson',
		margin: 20

	}
});

export default Home;