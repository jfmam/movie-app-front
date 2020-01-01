import React from 'react';
import { StyleSheet, View } from 'react-native';
import rootReducer from './store/'
import SwitchNavigator from './navigation/switchNavigator'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from "react-redux";
import {createStore} from 'redux'
import axios from 'axios'


let store=createStore(rootReducer);

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  
  return (
      <Provider store={store}>
         <SwitchNavigator/>   
         </Provider>
  );
  }
}



