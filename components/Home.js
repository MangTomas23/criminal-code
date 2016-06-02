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
import { AdMobBanner, AdMobInterstitial } from 'react-native-admob'

AdMobInterstitial.setAdUnitId('ca-app-pub-1547807753053427/3801442596');

class Home extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Toolbar
					icon='menu'	
					title='Home' 
					onPress={this._onIconPress.bind(this)}/>
				<ScrollView>
					<Text style={styles.title}>The Criminal Code of the Philippines</Text>
					<ChapterList {...this.props} />
				</ScrollView>
				<AdMobBanner
				  bannerSize={"banner"}
				  adUnitID={"ca-app-pub-1547807753053427/1406379399"}
				  didFailToReceiveAdWithError={this.bannerError.bind(this)} />
			</View>
		);
	}	

	bannerError(error) {
		ToastAndroid.show(error, ToastAndroid.SHORT);
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