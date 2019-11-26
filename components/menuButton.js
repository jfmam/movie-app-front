import React from 'react'
import {StyleSheet, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons'


export  default class Menubutton extends React.Component{
    render(){
        return(
            <Ionicons
            name="md-menu"
            color="#fff"
            size={33}
            style={styles.menuIcon}
                onPress={() => {this.props.navigation.toggleDrawer()}}
            />
        )
    }
}



const styles = StyleSheet.create({
    menuIcon:{
        zIndex:9,
        marginLeft:20
    }
});