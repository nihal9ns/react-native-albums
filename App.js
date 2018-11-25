import React, {Component} from 'react';
import { Text, View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

class App extends Component {

  componentWillMount(){
    console.log('componentWillMount() in AlbumList');
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header headerText={'Albums!'} />
        <AlbumList />
      </View>
    );
  }
}

export default App;