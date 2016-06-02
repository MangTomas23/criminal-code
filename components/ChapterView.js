import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	ListView,
	TouchableHighlight,
	TouchableOpacity,
	ToastAndroid,
	ScrollView,
	AsyncStorage
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Toolbar from './Toolbar';

export default class ChapterView extends Component{
	render() {
		const sections = this.props.route.sections;
		return (
			<View style={styles.container}>
				<Toolbar title={this.props.route.title} 
					icon='arrow-back' onPress={this._backPress.bind(this)} />
				<ScrollView>
					<Accordion
						underlayColor='whitesmoke'
						sections={sections}
						renderHeader={this._renderHeader.bind(this)}
						renderContent={this._renderContent.bind(this)} />
				</ScrollView>
			</View>
		);
	}

	_renderHeader(section) {
		return (
			<View style={styles.title}>
				<Text style={styles.titleText}>Section {section.no}: {section.title}</Text>
			</View>
		);
	}

	_onBookMarkPress() {
		ToastAndroid.show('Bookmark added!', ToastAndroid.SHORT);
		AsyncStorage.setItem('bookmarks', 'ASDF');

		AsyncStorage.getItem('bookmarks')
			.then((value) =>{
				// ToastAndroid.show(value, ToastAndroid.SHORT);
			});
	}

	_renderContent(section) {
		let scopes = null;
		let penalties = null;
		if(section.scopes != null) {
			scopes = section.scopes.map((scope, i) => {
				const {title, items} = scope;
				const scopeItems = items.map((item, x) => {
					let columns = null;
					if(item.columns != null){
						columns = item.columns.map((column, y) => {
							return (
								<View key={y} style={{flex: 1, flexDirection: 'row', margin: 10}}>
									<Text style={{flex: 1}}>{column.col1}</Text>
									<Text style={{flex: 1}}>{column.col2}</Text>
								</View>
							);
						});
					}
					return (
						<View key={x}>
							<Text  
								style={styles.scopeContent}>{item.no}. {item.text}</Text>
								{columns}
						</View>
					);
				});
				return (
					<View key={i}>
						<Text style={styles.scopeTitle}>{title}</Text>
						{scopeItems}						
					</View>
				); 
			});
		}

		if(section.penalties != null) {
			penalties = section.penalties.map((penalty, i) => {
				let penaltyItems = penalty.penalties.map((p, x) => {
					return (
						<View key={x}>
							<Text style={styles.penaltyText}>{p.penalty}</Text>
							<Text>{p.term}</Text>
						</View>
					);
				});

				return (
					<View key={i}>
						<Text style={styles.penaltyType}>{penalty.type}</Text>
						{penaltyItems}
					</View>
				)
			});
		}

		return (
			<View style={styles.content}>
				<Text>{section.description}</Text>
				{scopes}
				{penalties}
			</View>
		);
	}
	
	_backPress() {
		this.props.navigator.pop();
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},

	title: {
		padding: 20,
		backgroundColor: 'white',
		borderBottomColor: 'whitesmoke',
		borderBottomWidth: 2,
		flex: 1,
		flexDirection: 'row', 
		alignItems: 'center'
	},

	titleText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'black',
		flex: 1
	},

	content: {
		padding: 20,
		backgroundColor: 'azure'
	},

	scopeTitle: {
		marginBottom: 10,
		marginTop: 10,
		fontStyle: 'italic',
		fontSize: 16
	},

	scopeContent: {
		marginBottom: 10
	},

	penaltyType: {
		textDecorationLine: 'underline',
		color: 'crimson',
		fontSize: 16,
		marginTop: 12,
		marginBottom: 12
	},

	penaltyText: {
		color: 'black',
		marginBottom: 4,
		marginTop: 4
	}
});