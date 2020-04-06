import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity,FlatList} from 'react-native';
import { Icon ,Drawer,Input, Item ,Header,Body,Card,Left,Right,Button,Picker} from 'native-base';


class SelectPlace extends React.Component {
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
            <Header style={{ height:52,backgroundColor:'#213e4a' }}>
          <Left >
          <TouchableOpacity onPress={()=>navigate('BookCar')}>

<Image source={require('../../image/left-arrow.png')} style={{width:20,height:20}}/>
</TouchableOpacity>
            </Left>
            <View style={{marginLeft:'25%'}}>
    <Text style={{fontSize:20,fontWeight:'500',marginTop:15,color:'white'}}>Place</Text>
</View>
<Right>

                </Right>
            </Header>
            </View>

            <View style={{flex:1,justifyContent:'center',backgroundColor:'#dfdfdf'}}>



<View style={{ flexDirection: "row", justifyContent: "center" }}>
<Item success style={{ width: "80%" }}>
<Image source={require('../../image/searchs.png')} style={{width:20,height:20}}/>
                  <Input
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    placeholder="Search"
                    placeholderTextColor="black"
                    style={{
                      color: "black",
                     
                    }}
                  />
                </Item>
</View>
<ScrollView>
    <View style={{marginTop:20}}>
    <Text style={{marginTop:20,fontSize:18,fontWeight:'500',marginLeft:40}}>Karachi - Jinnah Airport</Text>
        <View style={{borderBottomColor:'gray',borderBottomWidth:0.6,width:'95%',marginLeft:'2.5%',marginTop:10}}/>
        <Text style={{marginTop:20,fontSize:18,fontWeight:'500',marginLeft:40}}>Hyderabad</Text>
        <View style={{borderBottomColor:'gray',borderBottomWidth:0.6,width:'95%',marginLeft:'2.5%',marginTop:10}}/>
        <Text style={{marginTop:20,fontSize:18,fontWeight:'500',marginLeft:40}}>Lahore Airport</Text>
        <View style={{borderBottomColor:'gray',borderBottomWidth:0.6,width:'95%',marginLeft:'2.5%',marginTop:10}}/>
        <Text style={{marginTop:20,fontSize:18,fontWeight:'500',marginLeft:40}}>Peshawar</Text>
        <View style={{borderBottomColor:'gray',borderBottomWidth:0.6,width:'95%',marginLeft:'2.5%',marginTop:10}}/>


        <Text style={{marginTop:20,fontSize:18,fontWeight:'500',marginLeft:40}}>Islamabad</Text>
        <View style={{borderBottomColor:'gray',borderBottomWidth:0.6,width:'95%',marginLeft:'2.5%',marginTop:10}}/>
        <Text style={{marginTop:20,fontSize:18,fontWeight:'500',marginLeft:40}}>Karachi Port</Text>
        <View style={{borderBottomColor:'gray',borderBottomWidth:0.6,width:'95%',marginLeft:'2.5%',marginTop:10}}/>
        <Text style={{marginTop:20,fontSize:18,fontWeight:'500',marginLeft:40}}>Karachi - Jinnah Airport</Text>
        <View style={{borderBottomColor:'gray',borderBottomWidth:0.6,width:'95%',marginLeft:'2.5%',marginTop:10}}/>
        <Text style={{marginTop:20,fontSize:18,fontWeight:'500',marginLeft:40}}>Hyderabad</Text>
        <View style={{borderBottomColor:'gray',borderBottomWidth:0.6,width:'95%',marginLeft:'2.5%',marginTop:10}}/>
        <Text style={{marginTop:20,fontSize:18,fontWeight:'500',marginLeft:40}}>Lahore Airport</Text>
        <View style={{borderBottomColor:'gray',borderBottomWidth:0.6,width:'95%',marginLeft:'2.5%',marginTop:10}}/>
        <Text style={{marginTop:20,fontSize:18,fontWeight:'500',marginLeft:40}}>Peshawar</Text>
        <View style={{borderBottomColor:'gray',borderBottomWidth:0.6,width:'95%',marginLeft:'2.5%',marginTop:10}}/>


        <Text style={{marginTop:20,fontSize:18,fontWeight:'500',marginLeft:40}}>Islamabad</Text>
        <View style={{borderBottomColor:'gray',borderBottomWidth:0.6,width:'95%',marginLeft:'2.5%',marginTop:10}}/>
        <Text style={{marginTop:20,fontSize:18,fontWeight:'500',marginLeft:40}}>Karachi Port</Text>
        <View style={{borderBottomColor:'gray',borderBottomWidth:0.6,width:'95%',marginLeft:'2.5%',marginTop:10}}/>

    </View>
</ScrollView>

</View>



</View>

)
}
}
export default SelectPlace;