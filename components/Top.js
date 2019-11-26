import React from 'react'
import {Header} from 'react-native-elements'
import MenuButton from './menuButton'

export default class Top extends React.Component{
    render(){
        return (<Header leftComponent={<MenuButton navigation={this.props.navigation}/>}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', style: { color: '#fff' } }}
        />
        
        )
    }
}