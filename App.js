import React from 'react';
import { StyleSheet, View } from 'react-native';
import rootReducer from './store/'
import SwitchNavigator from './navigation/switchNavigator'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from "react-redux";
import {createStore,applyMiddleware} from 'redux'
import axios from 'axios'
import createSagaMiddleware from 'redux-saga'
import rootsaga from './storesaga/index' 

const sagaMiddleWare=createSagaMiddleware()
const store=createStore(rootReducer,applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootsaga)

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }
componentDidMount(){
   Font.loadAsync(      
    {
        seguibli: require('./assets/seguibli.ttf')
    })
}
  render() {
  
  return (
      <Provider store={store}>
         <SwitchNavigator/>   
         </Provider>
  );
  }
}



