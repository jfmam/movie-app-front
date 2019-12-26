import React from 'react'
import {Platform,Dimensions,View,Text, ScrollView,SafeAreaView,StyleSheet} from 'react-native';
import {createDrawerNavigator,DrawerNavigatorItems} from 'react-navigation-drawer'
import TabBar from './BottomNavigator'
import WishList from '../screen/WishList'
import { createStackNavigator } from 'react-navigation-stack';
import MenuButton from '../components/menuButton'
import writeDiary from '../screen/writeDiary'


const StackNavigator=createStackNavigator({
    TabBar:TabBar,
    writeDiary:writeDiary
},
 TabBar.navigationOptions=({navigation})=>{
        return{
           headerLeft:( 
             <MenuButton  navigation={navigation}/>///상위 navigation인 drawer를따른다    
           ),
          headerTitle:(
            <Text>moviemoon</Text>
          ),     
       headerStyle:{
          backgroundColor: '#282828',
          elevation:-1 
       }
        }  
    } ,{
      defaultNavigationOptions:{
          headerMode: 'none'
      }
    },
    writeDiary.navigationOptions={
        header:(
          hedaerMode:'none'
        )
    }
  
)
export const DrawerContent = (props) => {
return(
  <SafeAreaView style={styles.container}>
    <View
      style={{
        backgroundColor: '#f50057',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: 'white', fontSize: 30 }}>
        Header
      </Text>
      {/*text대신에 image src를 넣어주먼된다 */}
    </View>
    <ScrollView>
        <DrawerNavigatorItems {...props} />
    </ScrollView>
  </SafeAreaView>
)
}
export default DrawerNavigator=createDrawerNavigator(
{
    홈:{
        screen:StackNavigator
       
    },
    위시리스트:{
        screen:WishList
    }
},{

    contentComponent:DrawerContent
    // 이부분을 props로보내주어서 밑에 띄운다
}
)

const styles = StyleSheet.create({
            container: {
                flex: 1,
                paddingTop: Platform.OS === 'android' ? 25 : 0
            },
           
        })
