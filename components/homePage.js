import  React ,{Component} from 'react';
import  {View,Text,TouchableOpacity,StyleSheet,Dimensions,TextInput,Image} from 'react-native';
import { Button } from 'react-native';
const { width, height } = Dimensions.get('window');


export default class Home extends Component{
    constructor(){
        super();
        this.state={
           // text : ''
        };
        setTimeout(()=>{this.props.navigation.navigate("Dashboard"),15000})

    }

    componentDidMount(){

    }
    render(){
        return(

            <View style={{flex: 1,flexDirection: 'column',}}>
                <View style={{backgroundColor:'rgb(1, 37, 71)',height:height*1}}>
                    <View style={{marginTop: height*0.2}}>
                        <View style={{height: height*0.25}}>
                            <Image style={{width:width*1}}
                                source={require('../images/img1.png')}
                            />
                        </View>
                        <View style={{ height: height*0.1}} >

                            <TouchableOpacity>
                                <Image
                                    style={{width:width*1}}
                                    source={require('../images/img2.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>

        )
    }
}



const styles = StyleSheet.create({

});
