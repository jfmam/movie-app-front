import React, { useEffect, useState, useCallback } from 'react'
import {View, SafeAreaView,Text} from 'react-native' 
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
    setActor(movieSearch.plot.slice(0,30));
    }else{
    setActToggle(true);
    setActor(movieSearch.actor);
    }
},[actToggle,movieSearch])
const plotButton=useCallback(()=>{
       if(plotToggle){
           setPlotToggle(false);
           setPlot(movieSearch.plot);
       }
       else{
          setPlotToggle(true);
          setPlot(movieSearch.actor.slice(0,30))
       }
},[plotToggle,movieSearch])

useEffect(()=>{
    movieSearch&&movieSearch.actor&&setActor(movieSearch.actor.slice(0,30));
    movieSearch&&movieSearch.plot&&setActor(movieSearch.plot.slice(0,30));
},[])

    return(
        <SafeAreaView>
        <ImageInfo movieId={props.movieId}></ImageInfo>
        <ScrollView>
        <Text>런닝타임</Text><Text>{`${movieSearch.runningtime}\n`}</Text>
        <Text>감독</Text><Text>{`${movieSearch.director}\n`}</Text>
        <Text>배우</Text><Text>{`${Actor}  `}</Text>{actToggle?<Button onPress={actButton}>...</Button>:<Button onPress={actButton}>감추기</Button>}
        <Text>줄거리</Text><Text>{`${Plot}  `}</Text>{plotToggle?<Button onPress={plotButton}>...</Button>:<Button onPress={plotButton}>감추기</Button>}
        </ScrollView>
        </SafeAreaView>
    )
}

export default MovieInfo