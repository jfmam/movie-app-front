import React, { useEffect, useState, useCallback } from 'react'
import {View, SafeAreaView,Text,StyleSheet,Platform} from 'react-native'
import {Button} from 'react-native-elements'
import { useSelector } from 'react-redux'
import ImageInfo from '../../components/imageInfo'
import { ScrollView } from 'react-native-gesture-handler'


const MovieInfo=(props)=>{
const {movieSearch} =useSelector(state=>state.search)
const [Actor,setActor]=useState('');
const [Plot, setPlot] = useState('');
const [actToggle,setActToggle]=useState(true);
const [plotToggle,setPlotToggle]=useState(true);

const actButton=useCallback(()=>{
    if(actToggle){
      setActToggle(false);
    setActor(movieSearch.actor.slice(0,30));
    }else{
    setActToggle(true);
    setActor(movieSearch.actor);
    }
},[actToggle,movieSearch,Actor])
const plotButton=useCallback(()=>{
       if(plotToggle){
           setPlotToggle(false);
           setPlot(movieSearch.plot);
       }
       else{
          setPlotToggle(true);
          setPlot(movieSearch.plot.slice(0,30))
       }
},[plotToggle,movieSearch,Plot])

useEffect(()=>{
    movieSearch&&movieSearch.actor&&setActor(movieSearch.actor.slice(0,30));
    movieSearch&&movieSearch.plot&&setPlot(movieSearch.plot.slice(0,30));
},[movieSearch])

    return(
        <SafeAreaView style={styles.container}>
        <ImageInfo movieId={props.movieId}></ImageInfo>
        <ScrollView style={{margin:20}}>
        <Text style={styles.Text}>런닝타임</Text><Text  style={styles.Text}>{`${movieSearch.runningtime}\n`}</Text>
        <Text style={styles.Text}>감독</Text><Text  style={styles.Text}>{`${movieSearch.director}\n`}</Text>
   
        <Text style={styles.Text}>배우</Text><Text  style={styles.Text}>{`${Actor  }`}
        {actToggle?<Text style={styles.Btn}  onPress={actButton}>    ...    </Text>:<Text style={styles.Btn} onPress={actButton}> 감추기 </Text>}
        </Text>
   

        <Text style={styles.Text}>줄거리</Text><Text  style={styles.Text}>
        {`${Plot  }  `}{plotToggle?<Text style={styles.Btn} onPress={plotButton}>    ...    </Text>
        :<Text style={styles.Btn} onPress={plotButton}> 감추기 </Text>}</Text>
        </ScrollView>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container: {
            flex: 1,
            alignContent: 'center',
            justifyContent: 'flex-start',
            paddingTop: Platform.OS === 'android' ? 25 : 0,
            backgroundColor:'#282828',         
        },
    Btn:{
        backgroundColor:"#d3d3d3"
    },
    Text:{
        color:"#fff"
    }
})

export default MovieInfo