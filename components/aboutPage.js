import  React ,{Component} from 'react';
import  {View,Text,TouchableOpacity} from 'react-native';


class About extends Component{
    render(){
        return(
            <View>

                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Home")}>
                        <Text style={{textAlign:'center',fontSize : 30 , fontWeight: 'bold',color : 'red'}}>
                            About page
                        </Text>
                    </TouchableOpacity>

            </View>
        )
    }
}
export  default  About;