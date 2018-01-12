import  React ,{Component} from 'react';
import  {View,Text,TouchableOpacity,StyleSheet,Dimensions,TextInput} from 'react-native';
import { Button } from 'react-native';
const { width, height } = Dimensions.get('window');



export default class Home extends Component{
    constructor(){
        super();
        this.state={
            text : ''
        }
    }    render(){console.log("to b checked",this.state)
        return(
            <View>
                <View style={{flex: 1,flexDirection: 'column'}}>
                    <View style={{height: 50}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("About")}>
                            <Text style={{textAlign:'center',fontSize : 30 , fontWeight: 'bold',color : 'red'}}>
                                Home page
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{height: 200,alignItems:'center'}}>
                        <View>
                         <TextInput style={{height: 60, width:width*0.6}}
                                    onChangeText={(text)=>{this.setState({text:text})}}
                         />
                        </View>
                        <Button title="submit" color="#841584" />
                    </View>
                </View>

            </View>
        )
    }
}



const styles = StyleSheet.create({

});
