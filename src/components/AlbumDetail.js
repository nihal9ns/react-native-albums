import React, {Component} from 'react';
import { StyleSheet,View,Text,Image } from 'react-native';
import Card from './Card';
import Button from './Button';
import CardSection from './CardSection';

const AlbumDetail = ({album}) => {
	const {name, author, type, id} = album;
	const {thumbnailStyle,headerContentStyle,thumbnailContainerStyle,headerTextStyle,imageStyle} = styles;

	return(
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image 
					style={thumbnailStyle}
					source={{ uri: author, alt: author}} />
				</View>
				<View style={headerContentStyle}> 
        			<Text style={headerTextStyle}>{name}</Text>
        			<Text>{type}</Text>
        		</View>
        	</CardSection>
        	<CardSection>
        		<Image 
        		style={imageStyle} 
        		source={{ uri: id.toString()}}/>
        	</CardSection>
        	<CardSection>
        		<Button onPress={() => console.log(name)}>
        			Buy Now
        		</Button>
        	</CardSection>
      	</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		width: 50,
		height: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};

export default AlbumDetail;



/* 

Video No. 53:
	import Linking
	<Button onPress={() => Linking.openURL(url)} />
*/