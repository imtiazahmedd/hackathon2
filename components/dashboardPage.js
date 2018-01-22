import  React ,{Component} from 'react';
import {View, Text, TouchableOpacity, Dimensions,Image} from 'react-native';
import Incomes from "./incomes";
import Expenses from "./expenses";
const { width, height } = Dimensions.get('window');

class Dashboard extends Component{
    render(){
        return(
            <View>
                <View style={{flex: 1,flexDirection: 'column'}}>
                    <View style={{height:height*1,backgroundColor:'rgb(215, 215, 215)'}}>
                    <View style={{height: height*0.5}}>
                        <Text>for graph</Text>
                    </View>
                    <View style={{height:height*0.3}}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{width: width*0.5,alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Incomes")}>
                                    <Image style={{}} source={require('../images/income.png')}/>
                                </TouchableOpacity>
                            </View>
                            <View style={{width: width*0.5,alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Expenses")}>
                                    <Image style={{}} source={require('../images/expance.png')}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    </View>
                </View>
            </View>
        )
    }
}
export  default  Dashboard;