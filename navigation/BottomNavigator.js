import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import HomeScreen from '../screen/bottomNavigation/HomeScreen'
import BoxOffice from '../screen/bottomNavigation/BoxOffice'
import DiaryScreen from '../screen/bottomNavigation/DiaryScreen'
import Recommandation from '../screen/bottomNavigation/Recommandation'
import React from 'react';
import { createAppContainer } from 'react-navigation';
import {View,Image,Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import diary from '../assets/diary.png'
import recomandation from '../assets/recomandaton.png'
import boxOffice from '../assets/boxOffice.png' 
import home from '../assets/home.png'
import MenuButton from '../components/menuButton'



const TabBar= createMaterialBottomTabNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
        navigationOptions:{
            tabBarLabel:'홈',

            labeled:true,
                       tabBarIcon: ({ tintColor }) => (  
                    <View>  
                       <Image source={home}/>
                    </View>),  
            activeColor: '#ffffff',
            inactiveColor:'#686868' ,   
                barStyle: {
                    backgroundColor: '#686868'
                }
        } },
          DiaryScreen: { screen:DiaryScreen,
        navigationOptions: {

            title:"my Diary",
            tabBarLabel: '다이어리',
              labeled:true,
                       tabBarIcon: ({ tintColor }) => (  
                    <View>  
                       <Image source={boxOffice} /> 
                    </View>),  
            activeColor: '#ffffff',
            inactiveColor: '#abcdef',
            barStyle: {
                backgroundColor: '#686868'
            }
        }
        },

        BoxOffice: { screen: BoxOffice, 
        navigationOptions: {
            tabBarLabel: '박스오피스',
            
                       tabBarIcon: ({ tintColor }) => (  
                    <View>  
                      <Image source={diary}/>
                    </View>),  
            activeColor: '#ffffff',
            inactiveColor: '#abcdef',
            barStyle: {
                backgroundColor: '#686868'
            }
        }
        },
     
        Recommandation: { 
        screen: Recommandation,
        navigationOptions: {
            tabBarLabel: '추천',
              labeled:true,
                       tabBarIcon: ({ tintColor }) => (  
                    <View>  
                       <Image source={recomandation}></Image>
                    </View>),  
            activeColor: '#ffffff',
            inactiveColor: '#abcdef',
            barStyle: {
                backgroundColor: '#686868'
            }
        },
        
        },
    },
);



export default createAppContainer(
TabBar
);
