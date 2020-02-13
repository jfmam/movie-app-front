import React,{useState} from 'react'
import {Platform,Dimensions,View,Text, ScrollView,SafeAreaView,StyleSheet,TextInput} from 'react-native';
import {createDrawerNavigator,DrawerNavigatorItems} from 'react-navigation-drawer'
import TabBar from './BottomNavigator'
import WishList from '../screen/WishList'
import { createStackNavigator } from 'react-navigation-stack';
import MenuButton from '../components/menuButton'
import writeDiary from '../screen/diaryComponents/writeDiary'
import {Avatar} from 'react-native-elements'
import getDiary from '../screen/diaryComponents/getDiary'
import diarySearch from '../screen/diaryComponents/diarySearchScreen'
import { useSelector, useDispatch } from 'react-redux';
import movieInfo from '../screen/diaryComponents/movieInfo'
import movieSearch from '../screen/diaryComponents/movieSearch'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { PROFILE_REQUEST } from '../store/user.state';

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
    },
    getDiary:{
      screen:getDiary,
      navigationOptions:{
       header:null
    }
  },
      diarySearch:{
      screen:diarySearch,
      navigationOptions:{
       header:null
      }
    },
    movieInfo:{
      screen:movieInfo,
      navigationOptions:{
       header:null
      }
  },
    movieSearch:{
      screen:movieSearch,
      navigationOptions:{
       header:null
      }
  }
})


export const DrawerContent = (props) => {
  const {user}=useSelector(state=>state.user)
  const {address}=useSelector(state=>state.user)
  const dispatch=useDispatch();

  const [profile,setProfile]=useState(null);
 

  const getPermission=async()=>{
         if (!Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status!== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
      else{
          await imagePicker()
      }
    }
    }

    const imagePicker=async()=>{
        let result=await ImagePicker.launchImageLibraryAsync(
            {
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: false,     
              quality: 1,
            }
        )
        console.log(result.uri);

        if(!result.cancelled){
            setProfile(result.uri)
        }
    }
    //result.uri를 보낸뒤에 그값을 src에받아준다?아 ㅅㅂ
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
  onPress={async() => {await getPermission()
  }}//imagepicker가 들어갈부분이다.
  activeOpacity={0.7}
  containerStyle={{ marginLeft: 0, marginTop:0}}
  source={{uri:`${profile}`}}
/>
    <Text style={{fontSize:20,marginLeft:30,color:'#fff'}}>{`${user.nickname}님`}</Text>
       {/* text대신에 image src를 넣어주먼된다 */}
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
