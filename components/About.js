import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import Toolbar from './Toolbar';

class About extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Toolbar icon='arrow-back' title='About' onPress={this._onIconPress.bind(this)}/>
				<View style={styles.about}>
					<Text style={styles.title}>Criminal Code of the Philippines</Text>
					<Text style={styles.version}>v1.0</Text>
					<Text>Created by: Adrian Paul B. Matos</Text>
					<Text>Copyright 2016</Text>
					<Text style={styles.suggestions}>Bugs / Suggestions? Please email me at </Text>
					<Text style={{color: 'cornflowerblue'}}>
					  matos.adrianpaul@gmail.com
					</Text>
				</View>
			</View>
		);
	}

	_onIconPress() {
		this.props.navigator.immediatelyResetRouteStack([{name: 'home'}]);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'honeydew'
	},

	about: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	title: {
		fontSize: 23,
		color: 'crimson'
	},

	version: {
		fontSize: 18,
		color: '#000',
		marginBottom: 25
	},

	suggestions: {
		marginTop: 40
	}
});



export default About;
