import  React ,{Component} from 'react';
import  {View,Text,StyleSheet} from 'react-native';
import  {StackNavigator} from 'react-navigation'
import  Home from './homePage'
import  Dashboard from './dashboardPage'
import Incomes from './incomes'
import Expenses from './expenses'
import AddIncome from "./addincome";

const Nav = StackNavigator({
    Home:{
        screen: Home
    },
    Dashboard:{
        screen:  Dashboard
    },
    Incomes:{
        screen:  Incomes
    },
    Expenses:{
        screen:  Expenses
    },
    AddIncome:{
        screen:  AddIncome
    }

},{
    headerMode:"none"
});


export  default  Nav;