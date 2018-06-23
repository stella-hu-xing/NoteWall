import React, { Component } from 'react';
import { AppRegistry,Text } from 'react-native';

export default class NoteBook extends Component {
  render() {
    return (
      <Text>Hello world! NoteBookList</Text>
    );
  }
}

AppRegistry.registerComponent('NoteBook', () =>NoteBook);