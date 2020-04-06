import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Icon ,Drawer, Item ,Header,Body,Card,Left,Right,Button,Picker,Input,} from 'native-base';


class ChooseYourStay extends React.Component {
    static navigationOptions={
        header:null,
       

    } 
    constructor(props) {
        super(props);
        this.state = {
          starCount: 3.5,
       
        
        }
    }
    // onStarRatingPress(rating) {
    //     this.setState({
    //       starCount: rating
    //     });
    //   }
    render() {
        
        const {navigate}=this.props.navigation;
       
        return (
            <View  style={{flex:1}}>

<View style={{marginTop:0}}>
            <Header style={{ height:60,backgroundColor:'#213e4a' }} androidStatusBarColor='#213e4a'>
          <Left style={{flexDirection:'row',}}>
          <TouchableOpacity onPress={()=>navigate('HotelPage')}>

<Image source={require('../../image/left-arrow.png')} style={{width:20,height:20}}/>
</TouchableOpacity>

            </Left>
            <View style={{width:200,marginTop:5}}>

<Text style={{fontSize:18,fontWeight:'500',marginTop:0,color:'white'}}>Choose Your Stay</Text>
<Text style={{fontSize:18,fontWeight:'500',marginTop:0,color:'white'}}>Jun 30 - Jul 3</Text>

</View>
<Right>
{/* <Image source={require('../../image/heart.png')} style={{marginHorizontal:5,width:20,height:20}}/> */}
<Image source={require('../../image/share.png')} style={{width:20,height:20,marginHorizontal:10,}}/>
{/* <Image source={require('../../image/menu.png')} style={{width:20,height:20,marginHorizontal:5,}}/> */}

                </Right>
            </Header>
            </View>


            <View style={{flex:0.93,backgroundColor:'#eeedee'}}>
<ScrollView>


{/* FIRST BOX */}
<View style={{width:'95%',marginLeft:'2.5%',borderColor:'#00610e',borderWidth:0.5}}> 
<View style={{backgroundColor:'#90ce9a',height:45,width:'100%'}}>
<Text style={{fontSize:16, fontWeight:'500',color:'#00610e',margin:10}}>Recommended for 2 Adult , 3 children , 2 Room</Text>
</View>

<View style={{flexDirection:'row',marginTop:20,marginLeft:10}}>
<View style={{backgroundColor:'#006fcb', marginRight:10,borderRadius:5,width:40,justifyContent:'center',flexDirection:'row'}}>
<Text style={{color:'white',fontSize:16,padding:1,fontWeight:'500',}}>2x</Text>
</View>
<Text style={{fontSize:20,fontWeight:'500',color:'#006fcb'}}>Standard Two Room</Text>
</View>


<View style={{marginTop:10,marginLeft:10}}>
<Text style={{fontSize:16, fontWeight:'500',color:'#00610e',}}>Free Cancellation until Jun 30</Text>
<Text style={{fontSize:16, fontWeight:'500',color:'#00610e',}}>Pay Later</Text>

</View>

<View style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
<Image source={require('../../image/avatar.png')} style={{width:20,height:20}}/>
<Text style={{fontSize:16, fontWeight:'400',marginLeft:5}}>Max . Guest : 3 adults</Text>
</View>
<View style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
<Image source={require('../../image/avatar.png')} style={{width:20,height:20}}/>
<Text style={{fontSize:16, fontWeight:'400',marginLeft:5}}>3 Bunk beds</Text>
</View>
<View style={{flexDirection:'row',marginLeft:10,marginTop:10,width:'50%'}}>
<Image source={require('../../image/avatar.png')} style={{width:20,height:20}}/>
<Text style={{fontSize:16, fontWeight:'400',marginLeft:5}}>Breakfast served at the property for PKR 500 (Optional)</Text>
</View>

<View style={{flexDirection:'row',justifyContent:'flex-end',marginLeft:10,marginTop:10}}>

<View style={{backgroundColor:'#006fcb', marginRight:10,borderRadius:5,width:40,justifyContent:'center',flexDirection:'row'}}>
<Text style={{color:'white',fontSize:16,padding:1,fontWeight:'500',}}>2x</Text>
</View>
<Text style={{fontSize:20,fontWeight:'500',color:'black',marginRight:10}}>PKR 229,999</Text>
</View>

<View style={{flexDirection:'row',justifyContent:'flex-end',marginLeft:10,marginTop:10}}>

<Text style={{fontSize:14,fontWeight:'400',color:'gray',marginRight:10}}>+ PKR 29,900 Taxes and Charges </Text>
</View>
<View style={{borderBottomColor:'gray',borderBottomWidth:0.5,width:'98%',marginLeft:'1%',marginTop:10}}/>

<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={{fontSize:20,fontWeight:'500',color:'black',marginLeft:10,marginTop:10}}>Total</Text>
<View style={{}}>
<Text style={{fontSize:20,fontWeight:'500',color:'black',marginRight:10,marginTop:10}}>PKR 229,999</Text>

</View>
</View>

<View style={{flexDirection:'row',justifyContent:'flex-end'}}>
<Text style={{fontSize:14,fontWeight:'400',color:'gray',marginRight:10}}>+ PKR 29,900 Taxes and Charges </Text>

    </View>

<Button style={{width:'95%',marginLeft:'2.5%',justifyContent:'center',backgroundColor:'#006fcb',marginVertical:10}}>
    <Text style={{fontSize:16, fontWeight:'500',color:'white'}}>
    Reserve these options
    </Text>
    </Button>
</View>
{/* FIRST BOX END*/}

{/* MAKE YOUR SELECTION */}
<View style={{marginTop:40, marginLeft:20}}>
    <Text style={{color:'gray',fontSize:18,fontWeight:'500'}}>
or make your own selection
    </Text>
</View>

{/* Second BOX */}
<Card style={{width:'95%',marginLeft:'2.5%',marginTop:10}}> 


<View style={{flexDirection:'row',marginTop:20,marginLeft:10}}>

<Text style={{fontSize:20,fontWeight:'500',color:'#006fcb'}}>Deluxe Double room</Text>
</View>


<View style={{marginTop:10,marginLeft:10}}>
<Text style={{fontSize:16, fontWeight:'500',color:'#00610e',}}>Free Cancellation until Jun 30</Text>
<Text style={{fontSize:16, fontWeight:'500',color:'#00610e',}}>Pay Later</Text>

</View>

<View style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
<Image source={require('../../image/avatar.png')} style={{width:20,height:20}}/>
<Text style={{fontSize:16, fontWeight:'400',marginLeft:5}}>Max . Guest : 3 adults</Text>
</View>
<View style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
<Image source={require('../../image/avatar.png')} style={{width:20,height:20}}/>
<Text style={{fontSize:16, fontWeight:'400',marginLeft:5}}>3 Bunk beds</Text>
</View>
<View style={{flexDirection:'row',marginLeft:10,marginTop:10,width:'50%'}}>
<Image source={require('../../image/avatar.png')} style={{width:20,height:20}}/>
<Text style={{fontSize:16, fontWeight:'400',marginLeft:5}}>Breakfast served at the property for PKR 500 (Optional)</Text>
</View>

<View style={{flexDirection:'row',justifyContent:'flex-end',marginLeft:10,marginTop:10}}>

<View style={{backgroundColor:'#006fcb', marginRight:10,borderRadius:5,width:40,justifyContent:'center',flexDirection:'row'}}>
<Text style={{color:'white',fontSize:16,padding:1,fontWeight:'500',}}>2x</Text>
</View>
<Text style={{fontSize:20,fontWeight:'500',color:'black',marginRight:10}}>PKR 229,999</Text>
</View>

<View style={{flexDirection:'row',justifyContent:'flex-end',marginLeft:10,marginTop:10}}>

<Text style={{fontSize:14,fontWeight:'400',color:'gray',marginRight:10}}>+ PKR 29,900 Taxes and Charges </Text>
</View>
<View style={{borderBottomColor:'gray',borderBottomWidth:0.5,width:'98%',marginLeft:'1%',marginTop:10}}/>

<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={{fontSize:20,fontWeight:'500',color:'black',marginLeft:10,marginTop:10}}>Total</Text>
<View style={{}}>
<Text style={{fontSize:20,fontWeight:'500',color:'black',marginRight:10,marginTop:10}}>PKR 229,999</Text>

</View>
</View>

<View style={{flexDirection:'row',justifyContent:'flex-end'}}>
<Text style={{fontSize:14,fontWeight:'400',color:'gray',marginRight:10}}>+ PKR 29,900 Taxes and Charges </Text>

    </View>

<Button  
style={{width:'95%',marginLeft:'2.5%',justifyContent:'center',backgroundColor:'white',borderColor:'#006fcb',borderWidth:0.5,marginVertical:10}}>
    <Text style={{fontSize:16, fontWeight:'500',color:'#006fcb'}}>
    Select
    </Text>
    </Button>
</Card>

</ScrollView>    
</View>
<View style={{flex:0.07}}>
<View>
    <Button onPress={()=>navigate('FillInfo')} style={{marginTop:2,justifyContent:'center',backgroundColor:'#002c52',width:'98%',marginLeft:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Reserve</Text>
    </Button>
</View>
</View>
</View>
        )
    }
}

export default ChooseYourStay;
