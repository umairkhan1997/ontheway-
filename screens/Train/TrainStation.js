

import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity,FlatList} from 'react-native';
import { Icon ,Drawer, Item ,Header,Body,Card,Left,Right,Button,Picker} from 'native-base';


class TrainStations extends React.Component {
    static navigationOptions={
        header:null,
    } 
    constructor(props) {
        super(props);
        this.state = {
      
         date:new Date(),
         
        }
        //this.setDate = this.setDate.bind(this);

        this.backPressSubscriptions = new Set()
    } 
    render() {
        const {navigate}=this.props.navigation;

        return (
            <View  style={{flex:1}}>
            
                   {/* Header section */}
                   <View style={{marginTop:0}}>
                        <Header style={{ height:52,backgroundColor:'#213e4a' }} androidStatusBarColor='#213e4a'>
                      <Left >
                      <TouchableOpacity onPress={()=>navigate('BookingTrain')} >
            
            <Image source={require('../../image/left-arrow.png')} style={{width:20,height:20}}/>
            </TouchableOpacity>
                        </Left>
                        <View style={{marginLeft:'25%'}}>
                <Text style={{fontSize:20,fontWeight:'500',marginTop:15,color:'white'}}>Train Details</Text>
            </View>
            <Right>
            
                            </Right>
                        </Header>
                        </View>
            
                        <View style={{flex:1,justifyContent:'center',backgroundColor:'#dfdfdf'}}>
            
            <ScrollView>
                
{/* Station one */}
<View>
                <View style={{backgroundColor:'#527a01',height:40,width:'100%',justifyContent:'center',flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:16,fontWeight:'500',marginTop:8}}>27 UP Shalimar Express</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
<Text>Departure</Text>
<View style={{flexDirection:'row',backgroundColor:'#4e7b05',marginTop:-5,height:30}}>
<Image style={{width:15,height:15,marginHorizontal:5,marginTop:6}} source={require('../../image/map.png')}/>
<Text style={{fontSize:14,fontWeight:'500',color:'white',marginHorizontal:5,marginTop:6}}>13 stop</Text>
</View>
<Text>Arrival</Text>
                </View>
                <TouchableOpacity onPress={()=>navigate('DetailUser')}>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
                <Text style={{fontSize:20,fontWeight:'500'}}>22:30</Text>
       <Text style={{color:'#527a01'}}>16 hrs 30 min </Text>
<Text style={{fontSize:20,fontWeight:'500'}}>22:30</Text>
                </View>
                </TouchableOpacity>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <Text style={{fontSize:20,fontWeight:'400',marginLeft:20}}>Karachi-Cantt</Text>
<Text style={{fontSize:20,fontWeight:'400',marginRight:20}}>Lahore</Text>
                </View>
<View style={{marginTop:10}}>
    <Text style={{fontSize:18,fontWeight:'500',marginLeft:30}}>Ac Business</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <Text style={{fontSize:16,fontWeight:'400',marginLeft:20}}>Seat Fare</Text>
<Text style={{fontSize:16,fontWeight:'400',marginRight:20}}>Berth Fare</Text>
<Text style={{fontSize:16,fontWeight:'400',marginRight:20}}>Vacant Seats</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <Text style={{fontSize:16,fontWeight:'400',marginLeft:20}}>4800</Text>
<Text style={{fontSize:16,fontWeight:'400',marginRight:20}}>4800</Text>
<Text style={{fontSize:16,fontWeight:'400',marginRight:20}}>27</Text>
                </View>

                <View style={{marginTop:20}}>
    <Text style={{fontSize:18,fontWeight:'500',marginLeft:30}}>Ac Lower/Standard</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <Text style={{fontSize:16,fontWeight:'400',marginLeft:20}}>Seat Fare</Text>
<Text style={{fontSize:16,fontWeight:'400',marginRight:20}}>Berth Fare</Text>
<Text style={{fontSize:16,fontWeight:'400',marginRight:20}}>Vacant Seats</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <Text style={{fontSize:16,fontWeight:'400',marginLeft:20}}>4800</Text>
<Text style={{fontSize:16,fontWeight:'400',marginRight:20}}>4800</Text>
<Text style={{fontSize:16,fontWeight:'400',marginRight:20}}>27</Text>
                </View>
                
                <View style={{marginTop:20}}>
    <Text style={{fontSize:18,fontWeight:'500',marginLeft:30}}>Economy</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <Text style={{fontSize:16,fontWeight:'400',marginLeft:20}}>Seat Fare</Text>
<Text style={{fontSize:16,fontWeight:'400',marginRight:20}}>Berth Fare</Text>
<Text style={{fontSize:16,fontWeight:'400',marginRight:20}}>Vacant Seats</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <Text style={{fontSize:16,fontWeight:'400',marginLeft:20}}>4800</Text>
<Text style={{fontSize:16,fontWeight:'400',marginRight:20}}>4800</Text>
<Text style={{fontSize:16,fontWeight:'400',marginRight:20}}>27</Text>
                </View>
                </View>

                {/* Station Two */}
<View>
                <View style={{backgroundColor:'#527a01',height:40,width:'100%',justifyContent:'center',flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:16,fontWeight:'500',marginTop:8}}>47 UP Lahore Express</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
<Text>Departure</Text>
<TouchableOpacity onPress={()=>navigate('StopList')}>
<View style={{flexDirection:'row',backgroundColor:'#4e7b05',marginTop:-5,height:30}}>
<Image style={{width:15,height:15,marginHorizontal:5,marginTop:6}} source={require('../../image/map.png')}/>
<Text style={{fontSize:14,fontWeight:'500',color:'white',marginHorizontal:5,marginTop:6}}>13 stop</Text>
</View>
</TouchableOpacity>
<Text>Arrival</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
                <Text style={{fontSize:20,fontWeight:'500'}}>22:30</Text>
       <Text style={{color:'#527a01'}}>16 hrs 30 min </Text>
<Text style={{fontSize:20,fontWeight:'500'}}>22:30</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <Text style={{fontSize:20,fontWeight:'400',marginLeft:20}}>Karachi-Cantt</Text>
<Text style={{fontSize:20,fontWeight:'400',marginRight:20}}>Lahore</Text>
                </View>
<View style={{marginTop:10}}>
    <Text style={{fontSize:18,fontWeight:'500',marginLeft:30}}>Ac Business</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <Text style={{fontSize:16,fontWeight:'400',marginLeft:20}}>Seat Fare</Text>
<Text style={{fontSize:16,fontWeight:'400',marginRight:20}}>Berth Fare</Text>
<Text style={{fontSize:16,fontWeight:'400',marginRight:20}}>Vacant Seats</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <Text style={{fontSize:16,fontWeight:'400',marginLeft:20}}>4800</Text>
<Text style={{fontSize:16,fontWeight:'400',marginRight:20}}>4800</Text>
<Text style={{fontSize:16,fontWeight:'400',marginRight:20}}>27</Text>
                </View>

                <View style={{marginTop:20}}>
    <Text style={{fontSize:18,fontWeight:'500',marginLeft:30}}>Ac Lower/Standard</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <Text style={{fontSize:16,fontWeight:'400',marginLeft:20}}>Seat Fare</Text>
<Text style={{fontSize:16,fontWeight:'400',marginRight:20}}>Berth Fare</Text>
<Text style={{fontSize:16,fontWeight:'400',marginRight:20}}>Vacant Seats</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <Text style={{fontSize:16,fontWeight:'400',marginLeft:20}}>4800</Text>
<Text style={{fontSize:16,fontWeight:'400',marginRight:20}}>4800</Text>
<Text style={{fontSize:16,fontWeight:'400',marginRight:20}}>27</Text>
                </View>
                
                <View style={{marginTop:20}}>
    <Text style={{fontSize:18,fontWeight:'500',marginLeft:30}}>Economy</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <Text style={{fontSize:16,fontWeight:'400',marginLeft:20}}>Seat Fare</Text>
<Text style={{fontSize:16,fontWeight:'400',marginRight:20}}>Berth Fare</Text>
<Text style={{fontSize:16,fontWeight:'400',marginRight:20}}>Vacant Seats</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                <Text style={{fontSize:16,fontWeight:'400',marginLeft:20}}>4800</Text>
<Text style={{fontSize:16,fontWeight:'400',marginRight:20}}>4800</Text>
<Text style={{fontSize:16,fontWeight:'400',marginRight:20}}>27</Text>
                </View>
                </View>
</ScrollView>
</View>



</View>

)
}
}
export default TrainStations;