import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TabsNav from '../navigation/TabsNav';

export default class MainHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      
        <TabsNav />
      
    );
  }
}
