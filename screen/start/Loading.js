import {Image, SafeAreaView,StyleSheet,Platform,Text} from 'react-native'
import React from 'react'
import moviemoon from '../../assets/SplashFix.gif'

export default loading=(props)=>{
setTimeout(async() =>props.navigation.navigate('Login'), 3500)
   return(
       <SafeAreaView style={styles.container}>
       <Image style={styles.img} source={moviemoon}></Image>
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
                width:'100%',
                height:'100%',            
            },
            font:{
                fontSize:40,
               
              alignSelf:'center',
                color:"#d3d3d3",
                marginTop:10
            }
        }

)