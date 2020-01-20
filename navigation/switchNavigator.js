import {createSwitchNavigator} from 'react-navigation'
import DrawerNavigator from './DrawerNavigator'
import TabBar from './BottomNavigator'
import Login from '../screen/start/Login'
import SignUp from '../screen/start/SignUp'
import Loading from '../screen/start/Loading'
import {createAppContainer,} from 'react-navigation'

export default createAppContainer(
    createSwitchNavigator({
        Loading:Loading,
        Login:Login,
        App: DrawerNavigator,
        SignUp:SignUp
        
    }, {
        initialRouteName: 'Loading',
    })
);