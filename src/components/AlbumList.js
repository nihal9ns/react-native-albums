import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

	state = {
		albums : [
			{
				id: 1,
				name: 'Album 1',
				type: 'Genre',
				author: 'Author 1'
			},
			{
				id: 2,
				name: 'Album 2',
				type: 'Genre',
				author: 'Author 2'
			},
			{
				id: 3,
				name: 'Album 3',
				type: 'Genre',
				author: 'Author 3'
			},
			{
				id: 4,
				name: 'Album 4',
				type: 'Genre',
				author: 'Author 4'
			},
			{
				id: 5,
				name: 'Album 5',
				type: 'Genre',
				author: 'Author 5'
			}
		]
	};

	renderAlbums(){
		return this.state.albums.map(album => <AlbumDetail key={album.id} album={album} />);
	}

  render() {
    return (
      <ScrollView>
      	{this.renderAlbums()}
      </ScrollView>
    );
  }
}


export default AlbumList;