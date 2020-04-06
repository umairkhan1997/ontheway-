import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity,FlatList} from 'react-native';
import { Icon ,Drawer,Input, Item ,Header,Body,Card,Left,Right,Button,Picker} from 'native-base';


class StopList extends React.Component {
    static navigationOptions={
        header:null,
    } 
    constructor(props) {
        super(props);
        this.state = {
          starCount: 3.5,
          selected: "Recent",
          show:'HIDE',
          shows:false,
          password:''
          
        }
        this.backPressSubscriptions = new Set()
    } 
    _onPress = () => {
      this.props.onPressItem(this.props.id);
    }
    

    onValueChange(value) {
        this.setState({
          selected: value
        });
      }
      openDrawer = () => {
        this.drawer._root.open();
      };
      closeDrawer = () => {
        this.drawer._root.close();
      };
    
  render() {
    
    const {navigate}=this.props.navigation;
    const textColor = this.props.selected ? 'red' : 'black';
    return (
<View  style={{flex:1}}>

       {/* Header section */}
       <View style={{marginTop:0}}>
            <Header style={{ height:52,backgroundColor:'#213e4a' }} androidStatusBarColor='#213e4a'>
          <Left >
          <TouchableOpacity onPress={()=>navigate('TrainStations')}>

<Image source={require('../../image/left-arrow.png')} style={{width:20,height:20}}/>
</TouchableOpacity>
            </Left>
            <View style={{marginLeft:'25%'}}>
    <Text style={{fontSize:20,fontWeight:'500',marginTop:15,color:'white'}}>StopList</Text>
</View>
<Right>

                </Right>
            </Header>
            </View>

            <View style={{flex:1,justifyContent:'center',backgroundColor:'#dfdfdf'}}>
<ScrollView>
<View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
                <Text style={{fontSize:20,fontWeight:'500'}}>Station</Text>
       <Text style={{fontSize:20,fontWeight:'500'}}>Arrival</Text>
<Text style={{fontSize:20,fontWeight:'500'}}>Departure</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
                <Text style={{fontSize:16,fontWeight:'400',color:'#527a01'}}>1 .Karachi -Cantt</Text>
       <Text style={{fontSize:16,fontWeight:'400',color:'#527a01'}}>17:00</Text>
<Text style={{fontSize:16,fontWeight:'400',color:'#527a01'}}>19:00</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
                <Text style={{fontSize:16,fontWeight:'400',color:'#527a01'}}>2 .Karachi -Cantt</Text>
       <Text style={{fontSize:16,fontWeight:'400',color:'#527a01'}}>17:00</Text>
<Text style={{fontSize:16,fontWeight:'400',color:'#527a01'}}>19:00</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
                <Text style={{fontSize:16,fontWeight:'400',color:'#527a01'}}>3 .Karachi -Cantt</Text>
       <Text style={{fontSize:16,fontWeight:'400',color:'#527a01'}}>17:00</Text>
<Text style={{fontSize:16,fontWeight:'400',color:'#527a01'}}>19:00</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
                <Text style={{fontSize:16,fontWeight:'400',color:'#527a01'}}>4 .Karachi -Cantt</Text>
       <Text style={{fontSize:16,fontWeight:'400',color:'#527a01'}}>17:00</Text>
<Text style={{fontSize:16,fontWeight:'400',color:'#527a01'}}>19:00</Text>
                </View>
</ScrollView>

</View>



</View>

)
}
}
export default StopList;