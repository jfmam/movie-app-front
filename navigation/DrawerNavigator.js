import React from 'react'
import {Platform,Dimensions,View,Text, ScrollView,SafeAreaView,StyleSheet,TextInput} from 'react-native';
import {createDrawerNavigator,DrawerNavigatorItems} from 'react-navigation-drawer'
import TabBar from './BottomNavigator'
import WishList from '../screen/WishList'
import { createStackNavigator } from 'react-navigation-stack';
import MenuButton from '../components/menuButton'
import writeDiary from '../screen/writeDiary'
import {Avatar} from 'react-native-elements'

const StackNavigator=createStackNavigator({
    TabBar:{
      screen:TabBar,
      navigationOptions:({navigation,props})=>{
        return{
           headerLeft:( 
             <MenuButton navigation={navigation}/>///상위 navigation인 drawer를따른다    
           ),
          headerTitle:(
            <Text>moviemoon</Text>
          ),     
       headerStyle:{
          backgroundColor: '#282828',
          elevation:-1 ,
        
       }
        }  
    }
    
    },
    writeDiary:{
      screen:writeDiary,
    navigationOptions:{
       header:null
    }
    }
}
,{ 
 
         
       }   
      
    
)
export const DrawerContent = (props) => {
return(
  <SafeAreaView style={styles.container}>
    <View
      style={{
        backgroundColor: '#4b4b4b',
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row'
      }}
    >
     <Avatar
  rounded
  size='large'
  icon={{name: 'user', type: 'font-awesome'}}
  onPress={() => console.log("Works!")}//imagepicker가 들어갈부분이다.
  activeOpacity={0.7}
  containerStyle={{ marginLeft: 0, marginTop:0}}
/>
<Text style={{fontSize:20,marginLeft:30,color:'#fff'}}>이승헌</Text>
      {/*text대신에 image src를 넣어주먼된다 */}
    </View>
      <TextInput editable={false}/>
    <ScrollView>
        <DrawerNavigatorItems  {...props} />
    </ScrollView>
  </SafeAreaView>
)
}
export default DrawerNavigator=createDrawerNavigator(
{
    홈:{
        screen:StackNavigator,
       
    },
    위시리스트:{
        screen:WishList, 
    }
},{

    contentComponent:DrawerContent,
   drawerBackgroundColor:"#4b4b4b",
  contentOptions: {
    inactiveTintColor: '#fff'
  }
    // 이부분을 props로보내주어서 밑에 띄운다
}
)

const styles = StyleSheet.create({
            container: {
                flex: 1,
                paddingTop: Platform.OS === 'android' ? 25 : 0
            },
           
        })
