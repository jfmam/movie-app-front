import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import HomeScreen from '../screen/HomeScreen'
import BoxOffice from '../screen/BoxOffice'
import DiaryScreen from '../screen/DiaryScreen'
import Recommandation from '../screen/Recommandation'
import React from 'react';
import { createAppContainer } from 'react-navigation';
import {View,Image} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import diary from '../assets/diary.png'
import recomandation from '../assets/recomandaton.png'
import boxOffice from '../assets/boxOffice.png' 

const TabBar= createMaterialBottomTabNavigator(
    {
        HomeScreen: { screen: HomeScreen,
        navigationOptions:{
            tabBarLabel:'홈',
            labeled:true,
                       tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'md-home'}/>  
                    </View>),  
            activeColor: '#f0edf6',
                inactiveColor: '#abcdef',
                barStyle: {
                    backgroundColor: '#3489ab'
                }
        } },
        BoxOffice: { screen: BoxOffice, 
        navigationOptions: {
            tabBarLabel: '박스오피스',

                       tabBarIcon: ({ tintColor }) => (  
                    <View>  
                      <Image source={boxOffice}/>
                    </View>),  
            activeColor: '#f0edf6',
            inactiveColor: '#abcdef',
            barStyle: {
                backgroundColor: '#127777'
            }
        }
        },
        DiaryScreen: { screen:DiaryScreen,
        navigationOptions: {

            title:"my Diary",
            tabBarLabel: '다이어리',
              labeled:true,
                       tabBarIcon: ({ tintColor }) => (  
                    <View>  
                       <Image source={diary} /> 
                    </View>),  
            activeColor: '#f0edf6',
            inactiveColor: '#abcdef',
            barStyle: {
                backgroundColor: '#127777'
            }
        }
        },
        Recommandation: { screen: Recommandation,
        
        navigationOptions: {
            tabBarLabel: '추천',
              labeled:true,
                       tabBarIcon: ({ tintColor }) => (  
                    <View>  
                       <Image source={recomandation}></Image>
                    </View>),  
            activeColor: '#f0edf6',
            inactiveColor: '#abcdef',
            barStyle: {
                backgroundColor: '#127777'
            }
        }
        },
    },
    {
       
        activeColor: '#f0edf6',
        inactiveColor: '#abcdef',
        barStyle: { backgroundColor: '#127777' },
    }
);



export default createAppContainer(
TabBar
);
