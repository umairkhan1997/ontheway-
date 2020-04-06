import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
  Image,
  TextInput,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity
} from "react-native";
import {
  Icon,
  Drawer,
  Item as FormItem,
  Header,
  Body,
  Card,
  Badge
} from "native-base";



class BookDrawer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
    
    }

    }
  
    render() {
        const { navigate } = this.props.menu.navigation;
    return (
      <View
        style={{
          height: Dimensions.get("window").height,
          backgroundColor: "white"
        }}
      >

<View style={{flex:0.85}}>

      {/* profile */}
      <View style={{flexDirection:'row',}}>
      <Image source={require('../image/profile.png')} style={{marginTop:40,width:25,height:25,margin:5,marginLeft:10}}/>
      <Text style={{marginTop:45,fontSize:16,fontWeight:'500',color:'#213e4a',textAlign:'center',margin:5,marginLeft:15}}>Bruno Stephan</Text>
      </View>
      {/* <View style={{borderBottomColor:'gray',borderBottomWidth:0.3,marginTop:10}}/> */}



 <View style={{flexDirection:'row',marginTop:15}}>
       <Image source={require('../image/portfolio.png')} style={{marginTop:10,width:20,height:20,margin:5,marginLeft:10}}/>
       <Text style={{marginTop:10,fontSize:16,fontWeight:'500',color:'#213e4a',textAlign:'center',margin:5,marginLeft:20}}>Bookings</Text>
       </View>
       {/* <View style={{borderBottomColor:'gray',borderBottomWidth:0.3,marginTop:10}}/> */}

       <View style={{flexDirection:'row',marginTop:15}}>
       <Image source={require('../image/heartss.png')} style={{marginTop:10,width:20,height:20,margin:5,marginLeft:10}}/>
       <Text style={{marginTop:10,fontSize:16,fontWeight:'500',color:'#213e4a',textAlign:'center',margin:5,marginLeft:20}}>Lists</Text>
       </View>
       {/* <View style={{borderBottomColor:'gray',borderBottomWidth:0.3,marginTop:10}}/> */}
        
       <View style={{flexDirection:'row',marginTop:15}}>
       <Image source={require('../image/car.png')} style={{marginTop:10,width:20,height:20,margin:5,marginLeft:10}}/>
       <Text style={{marginTop:10,fontSize:16,fontWeight:'500',color:'#213e4a',textAlign:'center',margin:5,marginLeft:20}}>Car Rentals</Text>
       </View>
       {/* <View style={{borderBottomColor:'gray',borderBottomWidth:0.3,marginTop:10}}/> */}
        
{/* Review */}

      {/* <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{marginTop:10,fontSize:14,fontWeight:'500',color:'#213e4a',textAlign:'center',margin:5,marginLeft:10}}>Reviews</Text>
      <Image source={require('../images/rating.png')} style={{marginTop:10,width:20,height:20,margin:5,marginRight:10}}/>
      </View>
      <View style={{borderBottomColor:'gray',borderBottomWidth:0.3,marginTop:10}}/> */}


{/* Instagram */}

{/* <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{marginTop:10,fontSize:14,fontWeight:'500',color:'#213e4a',textAlign:'center',margin:5,marginLeft:10}}>Instagram Profille</Text>
      <Image source={require('../images/instagram.png')} style={{marginTop:10,width:20,height:20,margin:5,marginRight:10}}/>
      </View>
      <View style={{borderBottomColor:'gray',borderBottomWidth:0.3,marginTop:10}}/> */}
{/* Edit Profile */}
     {/* <TouchableOpacity onPress={()=>navigate('')}>

<View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{marginTop:10,fontSize:14,fontWeight:'500',color:'#213e4a',textAlign:'center',margin:5,marginLeft:10}}>Edit Profile</Text>
      <Image source={require('../image/user.png')} style={{marginTop:10,width:22,height:22,margin:5,marginRight:10}}/>
      </View>
      <View style={{borderBottomColor:'gray',borderBottomWidth:0.3,marginTop:10}}/>

     </TouchableOpacity>
{/* PAssword */}
      <View>

</View>


{/* Payment Plan */}
  {/* <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{marginTop:10,fontSize:14,fontWeight:'500',color:'#213e4a',textAlign:'center',margin:5,marginLeft:10}}>Payment Plan</Text>
      <Image source={require('../image/credit.png')} style={{marginTop:10,width:22,height:22,margin:5,marginRight:10}}/>
      </View>
      <View style={{borderBottomColor:'gray',borderBottomWidth:0.3,marginTop:10}}/> */} 

</View>


{/* Logout */}
      <View style={{flex:0.15}}>
      <View style={{borderBottomColor:'gray',borderBottomWidth:0.3,marginTop:10}}/>
      {/* <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{marginTop:10,fontSize:14,fontWeight:'500',color:'#213e4a',textAlign:'center',margin:5,marginLeft:10}}>Log Out</Text>
      <Image source={require('../image/logout.png')} style={{marginTop:10,width:20,height:20,margin:5,marginRight:10}}/>
      </View> */}

<View style={{flexDirection:'row',}}>
       {/* <Image source={require('../image/car.png')} style={{marginTop:10,width:20,height:20,margin:5,marginLeft:10}}/> */}
       <Text style={{marginTop:10,fontSize:16,fontWeight:'500',color:'#213e4a',textAlign:'center',margin:5,marginLeft:20}}>Settings</Text>
       </View>
       <View style={{flexDirection:'row',}}>
       {/* <Image source={require('../image/car.png')} style={{marginTop:10,width:20,height:20,margin:5,marginLeft:10}}/> */}
       <Text style={{marginTop:10,fontSize:16,fontWeight:'500',color:'#213e4a',textAlign:'center',margin:5,marginLeft:20}}>Help Center</Text>
       </View>
       
</View>

      </View>
    );
  }
}

export default BookDrawer;