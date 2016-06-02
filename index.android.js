/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './components/App';

class CriminalCode extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('CriminalCode', () => CriminalCode);
