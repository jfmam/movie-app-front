import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Top from '../../components/Top'

export default class Recommandation extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>추천</Text>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center'
    },
});
