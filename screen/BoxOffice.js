import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function BoxOffice(){
    return (
        <View style={styles.container}>
           
            <Text>BoxOffice</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282828',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
});
