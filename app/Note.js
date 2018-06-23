import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

export default class Note extends Component {
  render() {
    return (
      <Text>Hello world! Page 1</Text>
    );
  }
}

AppRegistry.registerComponent('Note', () => Note);