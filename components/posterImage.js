import {} from 'react'
import { Image,StyleSheet, SafeAreaView,Platform} from 'react-native'

const posterImage=(props)=>{
    const {params}=props.navigation.state;
   const posterURI = params ? params.posterURI : null;
    return(
        <SafeAreaView style={styles.container}>
            <Image style={styles.poster} source={{uri:posterURI}} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignContent: 'center',
            justifyContent: 'flex-start',
            paddingTop: Platform.OS === 'android' ? 25 : 0,
            backgroundColor:'#282828',
            
        },
        poster:{
            marginTop:47,
            width:'100%',
            height:'90%'
        },
     
        
});

export default posterImage;