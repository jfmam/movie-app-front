import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
import Top from '../components/Top'

export default class WishList extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>WishList</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});