import  React ,{Component} from 'react';
import  {View,Text,TouchableOpacity,StyleSheet,Dimensions,TextInput,Image,AsyncStorage,Keyboard} from 'react-native';
import { Button } from 'react-native';
const { width, height } = Dimensions.get('window');
import ModalDropdown from 'react-native-modal-dropdown';


export default class AddIncome extends Component{
    constructor(){
        super();

        this.state={
            year : '',
            month : '',
            category : '',
            by : '',
            cost : '',
            myArray : []
        };

    }


    addIncome(){
        const {year, month, category, by, cost, myArray} = this.state;
        const value = AsyncStorage.getItem('incomes');

        value.then((data)=>{
            let oldArray = JSON.parse(data);
                 oldArray.push({
                     year: year,
                     month: month,
                     category: category,
                     by: by,
                     cost: cost
                 });
            try {
                AsyncStorage.setItem('incomes', JSON.stringify(oldArray));
                // alert('data saved')
                this.props.navigation.state.params.listenLocalStorage();
            } catch (error) {
                // alert('error')
            }
            });


    }


    render(){

        return(
            <View style={{flex: 1,flexDirection: 'column'}}>
                <View style={{height:height*1}}>
                <View style={{backgroundColor:'rgb(1, 37, 71)',height:height*0.1}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{width: width*0.1,alignItems:'center',justifyContent:'center'}}>
                            <TouchableOpacity onPress={()=>{
                                this.props.navigation.goBack()
                            }}>
                                <Image style={{}} source={require('../images/back.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: width*0.7,alignItems:'center',justifyContent:'center'}}>

                            <Image style={{}} source={require('../images/addIncome.png')}/>

                        </View>

                    </View>
                </View>
                <View style={{height: height*0.76,alignItems:'center',justifyContent:'center'}}>
                    <View style={{flex: 1,flexDirection: 'column',marginTop:height*0.1}}>
                        <View style={{flexDirection:'row', flexWrap:'wrap',height: height*0.15,width:width*0.9,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:15,paddingRight:10}}>Select Month/Year</Text>
                            <ModalDropdown onSelect={(i,value)=>this.setState({year : value})} options={['Jan', 'Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec']}>
                                <Text>select Month</Text>
                            </ModalDropdown>
                            <ModalDropdown onSelect={(i,value)=>this.setState({month : value})} options={['2012', '2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023']}>
                                <Text style={{marginLeft:5}}>Select year</Text>
                            </ModalDropdown>
                        </View>
                        <View style={{flexDirection:'row', flexWrap:'wrap',height: height*0.15,width:width*0.8,alignItems:'center',justifyContent:'center'}} >
                            <Text style={{fontWeight:'bold',fontSize:20}}>Category</Text>
                            <TextInput style={{width: 200}} onChangeText={(text)=>this.setState({category:text})}/>
                        </View>
                        <View style={{flexDirection:'row', flexWrap:'wrap',height: height*0.15,width:width*0.8,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:20}}>By</Text>
                            <TextInput style={{width: 200}} onChangeText={(text)=>this.setState({by:text})}/>
                        </View>
                        <View style={{flexDirection:'row', flexWrap:'wrap',height: height*0.15,width:width*0.8,alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontWeight:'bold',fontSize:20}}>Cost</Text>
                            <TextInput style={{width: 200}} onChangeText={(text)=>this.setState({cost:text})}/>
                        </View>
                    </View>
                </View>

                <View style={{height:height*0.1, backgroundColor:'rgb(1, 37, 71)',alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity onPress={this.addIncome.bind(this)}>
                        <Text style={{color:'#fff',fontSize:20,fontWeight:'bold',paddingHorizontal:80}}>Add</Text>
                    </TouchableOpacity>
                </View>

                </View>
            </View>
        )
    }
}



