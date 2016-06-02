import React, {Component} from 'react';
import {
	View, 
	StyleSheet,
	Text,
	TouchableHighlight,
	ToastAndroid
} from 'react-native';

class NavigationView extends Component {
	render() {
		return (
			<View style={styles.container}> 
				<NavItem text='Home' {...this.props} />
				<NavItem text='About' {...this.props} />
			</View>
		);
	}
}

class NavItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: ''
		}
	}

	componentDidMount() {
	  this.setState({text: this.props.text});
	}

	render() {
		const {text} = this.props;
		return (
			<TouchableHighlight onPress={this._onPress.bind(this)}>
				<View style={styles.navItem}>
					<Text>{text}</Text>
				</View>
			</TouchableHighlight>
		);
	}

	_onPress() {
		this.props.navigator.immediatelyResetRouteStack([{name: this.props.text.toLowerCase()}]);
		this.props.drawer.closeDrawer();
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'stretch',
	},

	navItem: {
		borderBottomWidth: 1,
		borderBottomColor: '#CCC',
		alignItems: 'center',
		padding: 20,
		backgroundColor: '#FFF'

	}
});

export default NavigationView;