import React, { Component } from 'react';
import { AppRegistry,Text,FlatList,StyleSheet, ListView,View,TouchableHighlight } from 'react-native';

var jsonData = require('../data/notes.json');

class NoteItem extends React.PureComponent {
    _onPress = () => {
      this.props.onPressItem(this.props.item.title);
    }
  
    render() {
      return (
        <TouchableHighlight
          onPress={this._onPress}
          underlayColor='#dddddd'>
              <View >
                <Text style={styles.price}>{this.props.item.title}</Text>
                <Text style={styles.title} numberOfLines={1}>{this.props.item.content}</Text>
              </View>
        </TouchableHighlight>
      );
    }
  }

export default class NoteBook extends Component {
    constructor(props) {
        super(props);
       this.state = {data: jsonData}
      }

    _keyExtractor = (item) => item.title;

    _renderItem = ({item}) => {
      return (
        <NoteItem item = {item}/>
      );
      
    };
    _onPress = (item) => {
        
      }
  render() {
    return (
        
        <FlatList
            data={this.state.data} 
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
        />

    );
  }
}

const styles = StyleSheet.create({
    thumb: {
      width: 80,
      height: 80,
      marginRight: 10
    },
    textContainer: {
      flex: 1
    },
    separator: {
      height: 1,
      backgroundColor: '#dddddd'
    },
    price: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#48BBEC'
    },
    title: {
      fontSize: 20,
      color: '#656565'
    },
    rowContainer: {
      flexDirection: 'row',
      padding: 10
    },
  });

AppRegistry.registerComponent('NoteBook', () =>NoteBook);