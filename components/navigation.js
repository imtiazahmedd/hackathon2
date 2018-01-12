import  React ,{Component} from 'react';
import  {View,Text,StyleSheet} from 'react-native';
import  {StackNavigator} from 'react-navigation'
import  Home from './homePage'
import  About from './aboutPage'

const Nav = StackNavigator({
    Home:{
        screen: Home
    },
    About:{
        screen: About
    }
});


export  default  Nav;