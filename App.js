import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Text } from 'native-base';
import SwitchNavigator from './navigation/switchNavigator'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from "react-redux";
import {createStore} from 'redux'
import store from './store/store'
import axios from 'axios'


const reducer=createStore(store);

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
  return (
    
    <Container>
     <SwitchNavigator/>
    </Container>
 
  );
  }
}



