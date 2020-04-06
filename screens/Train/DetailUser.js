import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity,FlatList} from 'react-native';
import { Icon ,Drawer,Input, Item ,Header,Body,Card,Left,Right,Button,Picker} from 'native-base';


class DetailUser extends React.Component {
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
            <Header androidStatusBarColor='#213e4a' style={{ height:52,backgroundColor:'#213e4a' }}>
          <Left >
          <TouchableOpacity onPress={()=>navigate('TrainStations')}>

<Image source={require('../../image/left-arrow.png')} style={{width:20,height:20}}/>
</TouchableOpacity>
            </Left>
            <View style={{marginLeft:'25%'}}>
            <Text style={{fontSize:20,fontWeight:'500',marginTop:15,color:'white'}}>Fill Detail Below</Text>
</View>
<Right>

                </Right>
            </Header>
            </View>

            <View style={{flex:1,justifyContent:'center',backgroundColor:'#dfdfdf'}}>
<ScrollView>

<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
<Text style={{marginLeft:15}}>35UP Sir Sayyed Express</Text>
<Text style={{marginRight:15}}>2019/08/25</Text>
</View>

<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
<Text style={{marginLeft:15}}>1 Adult, 0 Child ,</Text>
<Text style={{marginRight:15}}>KF-FSLD</Text>
</View>


<View style={{backgroundColor:'#527a01',height:40,width:'100%',marginTop:20,justifyContent:'space-around',flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:16,fontWeight:'500',marginTop:8}}>Group Details</Text>
                <Text style={{color:'white',fontSize:16,fontWeight:'500',marginTop:8}}>Individual Details</Text>

                </View>
<View style={{ flexDirection: "row", justifyContent: "center" }}>
    <Item style={{width:'90%'}}>
<Image source={require('../../image/smartphone-call.png')} style={{width:20,height:20}}/>
<Input
                    // value={this.state.password}
                    // onChangeText={password => this.setState({ password })}
                    placeholder="(Mobile (0300 6854876))"
                    placeholderTextColor="gray"
                    style={{
                      color: "gray",
                     
                    }}
                  />
                      </Item>
</View>

<View style={{backgroundColor:'#527a01',height:40,width:'100%',marginTop:20,justifyContent:'center',flexDirection:'row'}}>
                <Text style={{color:'white',fontSize:16,fontWeight:'500',marginTop:8}}>Enter Passenger Detail</Text>
                </View>
{/* <View style={{flexDirection:'row',marginLeft:30,marginTop:10}}>
<Image source={require('../image/smartphone-call.png')} style={{width:20,height:20}}/>
<Input
                    // value={this.state.password}
                    // onChangeText={password => this.setState({ password })}
                    placeholder="Travler's Name"
                    placeholderTextColor="gray"
                    style={{
                      color: "gray",
                     
                    }}
                  /> */}
{/* </View> */}
<View style={{ flexDirection: "row", justifyContent: "center" }}>
    <Item style={{width:'90%',marginLeft:20}}>
<Image source={require('../../image/smartphone-call.png')} style={{width:20,height:20}}/>
<Input
                    // value={this.state.password}
                    // onChangeText={password => this.setState({ password })}
                    placeholder="Travler's Name"
                    placeholderTextColor="gray"
                    style={{
                      color: "gray",
                     
                    }}
                  />
                      </Item>
</View>
<View style={{ flexDirection: "row", justifyContent: "center" }}>
    <Item style={{width:'90%',marginLeft:20}}>
<Image source={require('../../image/smartphone-call.png')} style={{width:20,height:20}}/>
<Input
                    // value={this.state.password}
                    // onChangeText={password => this.setState({ password })}
                    placeholder="Travler's  CNIC #"
                    placeholderTextColor="gray"
                    style={{
                      color: "gray",
                     
                    }}
                  />
                      </Item>
</View>
<Button style={{width:'90%',height:40,backgroundColor:'#527a01',marginTop:20,flexDirection:'row',justifyContent:'center',marginLeft:'5%'}}>
<Text style={{color:'white',fontSize:16,fontWeight:'500'}}>Proceed</Text>
</Button>
</ScrollView>

</View>



</View>

)
}
}
export default DetailUser;