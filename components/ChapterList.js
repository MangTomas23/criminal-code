import React, {Component} from 'react';
import {
	View,
	StyleSheet,
	Text,
	ListView,
	ToastAndroid, 
	TouchableHighlight,
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

export default class ChapterList extends Component {
	constructor(props){
		super(props);
		let criminal_codes = require('./codes.json');

		this.state = {
			criminal_codes: criminal_codes
		}
	}
	
	render() {
		const sections = this.state.criminal_codes.titles;

		return (
			<View>
					<Accordion
							underlayColor='whitesmoke'
							sections={sections}
							renderHeader={this._renderHeader.bind(this)}
							renderContent={this._renderContent.bind(this)} />
			</View>
		);
	}

	_renderContent(section) {
		const chapters = this.state.criminal_codes.titles.find((title) => {
			return title.no === section.no;
		}).chapters;

		const items = chapters.map((item, i) => {
			return (
				<Item key={i} title={item.title} no={item.no} chapters={chapters} {...this.props}/>
			);
		}); 

		return (
			<View>{items}</View>
		);
	}

	_renderHeader(section) {
		return (
			<View style={styles.header}>
				<Text style={styles.headerText}>Title {section.no}: {section.title}</Text>
			</View>
		);
	}
}


class Item extends Component {
	render() {
		const {title, no} = this.props;		
		return (
			<TouchableHighlight style={styles.itemContainer}
				underlayColor='skyblue' 
				onPress={this._onItemPress.bind(this)}>
				<Text style={styles.itemText}>Chapter {no}: {title}</Text>
			</TouchableHighlight>
		);
	}

	_onItemPress() {
		const sections = this.props.chapters.find((chapter) => 
			chapter.no === this.props.no).sections;

		this.props.navigator.push({
			name: 'chapterview', 
			title: this.props.title,
			no: this.props.no,
			sections
		});
	}
}

const styles = StyleSheet.create({
	itemContainer: {
		borderBottomWidth: 1,
		padding: 20,
		marginLeft: 12,
		borderBottomColor: 'whitesmoke'
	},

	itemText: {
		fontSize: 14,
		color: 'black'
	},

	header: {
		padding: 20
	},

	headerText: {
		fontSize: 20,
		color: 'navy'
	}
});