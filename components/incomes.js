import  React ,{Component} from 'react';
import  {View,Text,TouchableOpacity,StyleSheet,Dimensions,TextInput,Image,AsyncStorage,ScrollView} from 'react-native';
import { Button } from 'react-native';
import AddIncome from "./addincome";
const { width, height } = Dimensions.get('window');


export default class Incomes extends Component{
    constructor(props){
        super(props);
        this.state={
        data : {}
        };


    }

    listenLocalStorage(){
        const value = AsyncStorage.getItem('incomes');
        value.then((data)=>{
            this.setState({getData : JSON.parse(data)});
        })
    }

    render(){
        return(
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{height:height*1,width:width*1}}>
                <View style={{backgroundColor:'rgb(1, 37, 71)',height:height*0.1}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{width: width*0.1,alignItems:'center',justifyContent:'center'}}>
                            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                                <Image style={{}} source={require('../images/back.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: width*0.7,alignItems:'center',justifyContent:'center'}}>

                            <Image style={{}} source={require('../images/inc.png')}/>

                        </View>
                        <View style={{width: width*0.2,alignItems:'center',justifyContent:'center'}}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate("AddIncome", {listenLocalStorage: this.listenLocalStorage.bind(this)})}>
                            <Image style={{}} source={require('../images/add.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{backgroundColor: 'skyblue',height:height*0.2}}>

                </View>
                    <ScrollView>
                    <View style={{marginLeft:20,marginRight:20,borderWidth:1,borderColor:'grey',flexDirection:'row', flexWrap:'wrap',height :height*0.1,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontWeight:'bold',fontSize :20,marginHorizontal:20}}>Category</Text>
                        <Text style={{fontWeight:'bold',fontSize :20,marginHorizontal:20}}>By</Text>
                        <Text style={{fontWeight:'bold',fontSize :20,marginHorizontal:20}}>Cost</Text>
                    </View>
                    {this.state.getData && this.state.getData.map(ele=>{
                    {console.log(ele,'element************************')}
                        return <View style={{marginLeft:20,marginRight:20,borderWidth:1,borderColor:'grey',flexDirection:'row', flexWrap:'wrap',height :height*0.1,alignItems:'center',justifyContent:'center'}}>
                                    <Text style={{fontSize :20,marginHorizontal:28}}>{ele.category}</Text>
                                    <Text style={{fontSize :20,marginHorizontal:28}}>{ele.by}</Text>
                                    <Text style={{fontSize :20,marginHorizontal:28}}>{ele.cost}</Text>
                               </View>
                    })}
                    </ScrollView>
                </View>
            </View>

        )
    }
}



