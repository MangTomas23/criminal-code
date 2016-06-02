import Icon from 'react-native-vector-icons/MaterialIcons';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

class Toolbar extends Component {
	render() {
		return (
				<Icon.ToolbarAndroid 
				title={this.props.title} style={styles.toolbar}
				titleColor='#FFF'
				navIconName={this.props.icon}
				onIconClicked={this.props.onPress}
				overflowIconName="more-vert" />				
			);				
	}
}

const styles = StyleSheet.create({
	toolbar: {
		height: 56,
		backgroundColor: 'crimson'
	}
});

export default Toolbar;