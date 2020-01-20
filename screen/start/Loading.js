import {Image, SafeAreaView,StyleSheet,Platform,Text} from 'react-native'
import React from 'react'
import moviemoon from '../assets/Moviemoon.gif'

export default loading=(props)=>{
setTimeout(async() =>props.navigation.navigate('Login'), 3000)
   return(
       <SafeAreaView style={styles.container}>
       <Image style={styles.img} source={moviemoon}></Image>
       <Text style={styles.font}>Movie Moon</Text>
       </SafeAreaView>
   )
}

const styles = StyleSheet.create({
            container: {
                flex: 1,
               alignContent:'center',
                justifyContent: 'flex-start',
                paddingTop: Platform.OS === 'android' ? 25 : 0,
                backgroundColor: '#282828',
                flexDirection:"column"
            },
            img:{
                width:130,
                height:130,
                marginTop:220,
                alignSelf:'center'
              
            },
            font:{
                fontSize:40,
               
              alignSelf:'center',
                color:"#d3d3d3",
                marginTop:10
            }
        }

)