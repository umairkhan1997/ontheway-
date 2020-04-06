import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Icon ,Drawer, Item ,Header,Body,Card,Left,Right,Button,Picker,Input,} from 'native-base';
import StarRating from 'react-native-star-rating';

class HotelPage extends React.Component {
    static navigationOptions={
        header:null,
       

    } 
    constructor(props) {
        super(props);
        this.state = {
          starCount: 3.5,
          selected: "Recent",
          show:'HIDE',
        
        }
    }
    onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
      }
    render() {
        
        const {navigate}=this.props.navigation;
        const { selectedItems } = this.state;
        return (
            <View  style={{flex:1}}>

<View style={{marginTop:0}}>
            <Header style={{ height:60,backgroundColor:'#213e4a' }} androidStatusBarColor='#213e4a'>
          <Left style={{flexDirection:'row',width:'40%'}}>
          <TouchableOpacity onPress={()=>navigate('HotelSelection')}>

<Image source={require('../../image/left-arrow.png')} style={{width:20,height:20}}/>
</TouchableOpacity>
    <Text style={{fontSize:18,fontWeight:'500',width:100,marginTop:0,marginLeft:20,color:'white'}}>On The Way</Text>
            </Left>

<Right>
<Image source={require('../../image/heart.png')} style={{marginHorizontal:5,width:20,height:20}}/>
{/* <Image source={require('../image/share.png')} style={{width:20,height:20,marginHorizontal:10,}}/> */}
<Image source={require('../../image/menu.png')} style={{width:20,height:20,marginHorizontal:5,}}/>

                </Right>
            </Header>
            </View>


<View style={{flex:0.93,backgroundColor:'#eeedee'}}>
<ScrollView>
{/* Hotel Images */}


    <View style={{flexDirection:'row'}}>
 <ScrollView horizontal={true} 
 > 

<Image source={require('../../image/Dhaka-Hotels.jpg')} style={{marginHorizontal:1,width:200,height:150}}/>
<Image source={require('../../image/Dhaka-Hotels.jpg')} style={{marginHorizontal:1,width:200,height:150}}/>
<Image source={require('../../image/Dhaka-Hotels.jpg')} style={{marginHorizontal:1,width:200,height:150}}/>
<Image source={require('../../image/Dhaka-Hotels.jpg')} style={{marginHorizontal:1,width:200,height:150}}/>
<Image source={require('../../image/Dhaka-Hotels.jpg')} style={{marginHorizontal:1,width:200,height:150}}/>

</ScrollView>

</View>
  <View style={{backgroundColor:'#ffffff'}}>
<View style={{height:35,marginLeft:10,marginTop:10,flexDirection:'row'}}>
<Text style={{fontSize:18,fontWeight:'500'}}>Johar One Hotel</Text>
  {/* STARS  */}
      
  <View style={{width:'30%',marginTop:5,marginLeft:15}}>
  <StarRating
        disabled={false}
        maxStars={5}
        starSize={20}
        fullStarColor='gold'
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        />
        </View>
        </View>
        <View style={{flexDirection:'row',marginTop:10,marginLeft:10,marginBottom:5}}>
<Image source={require('../../image/place.png')} style={{width:20,height:20}}/>
<Text> Gilgit Baltistan , Pakistan</Text>
        </View>
</View>


        <Card style={{marginTop:10,height:60,flexDirection:'row'}}>
<Image source={require('../../image/checked.png')} style={{width:30,height:30,marginTop:15,marginLeft:15}}/>
<Text style={{fontSize:18,fontWeight:'400',marginLeft:20,marginTop:15}}>FREE cancelation on select option</Text>
</Card>


{/* Date  */}
<View style={{flexDirection:'row'}}>
    <Text style={{marginLeft:20,fontSize:18,fontWeight:'500',color:'gray'}}>Check In Date</Text>
    <Text style={{fontSize:18,fontWeight:'500',color:'gray',marginLeft:'35%'}}>Check Out Date</Text>
</View>
<View style={{flexDirection:'row'}}>
<Card style={{marginLeft:'1%',width:'48%',height:70,flexDirection:'row',justifyContent:'center'}}>
<Text style={{fontSize:28,fontWeight:'500',color:'gray',marginTop:15}}>30</Text>
<View style={{marginTop:15}}>
<Text style={{fontSize:16,fontWeight:'500',color:'gray'}}>Sunday</Text>    
<Text style={{fontSize:14,fontWeight:'500',color:'gray'}}>June 2019</Text>
</View>

</Card>

<Card style={{width:'48%',height:70,flexDirection:'row',justifyContent:'center'}}>
<Text style={{fontSize:28,fontWeight:'500',color:'gray',marginTop:15}}>30</Text>
<View style={{marginTop:15}}>
<Text style={{fontSize:16,fontWeight:'500',color:'gray'}}>Sunday</Text>    
<Text style={{fontSize:14,fontWeight:'500',color:'gray'}}>June 2019</Text>
</View>

</Card>
</View>

{/* REVIEW SECTION */}

<View>
    <Card style={{}}>
<Text style={{fontSize:16, fontWeight:'500',margin:10}}>No Review score yet </Text>
    <Text style={{marginLeft:10,marginBottom:10}}>This property doesn't have enough reviews</Text>
    </Card>
</View>

{/* Description SECTION */}

<View>
    <Card style={{}}>
<Text style={{fontSize:20, fontWeight:'500',margin:10}}>Description</Text>
    <Text style={{marginLeft:10,marginBottom:10,fontSize:16}}>Featureing a fitness center , BBQ area and views of lake , Johar
    One Hotel is located in Lahore in, 27 miles from Wagah Border . Among the facilities of this property 
    are a reatuarent , a 24-hour front desk .</Text>
    </Card>
</View>

{/* Features SECTION */}

<View>
    <Card style={{}}>
<Text style={{fontSize:20, fontWeight:'500',margin:10}}>Features</Text>
    <Text style={{marginLeft:10,marginBottom:10,fontSize:16}}>Parking, Restaurent, room services, Meeting </Text>
    <Text style={{marginLeft:10,marginBottom:10,fontSize:16}}>Banquet facilities , 24 hour front desk , Fitness Center</Text>
    </Card>
</View>

{/* Policies SECTION */}

<View>
    <Card style={{}}>
<Text style={{fontSize:20, fontWeight:'500',margin:10}}>Policies</Text>
    <Text style={{marginLeft:10,marginBottom:10,fontSize:16}}>Check-in from 12:00 PM until 12:00 AM</Text>
    <Text style={{marginLeft:10,marginBottom:10,fontSize:16}}>Check-out from 12:00 AM until 12:00 PM</Text>
    <View style={{flexDirection:'row'}}>
        <View style={{width:80,height:30,marginHorizontal:10,flexDirection:'row',backgroundColor:'#b6e5bf'}}>
<Image source={require('../../image/checked-green.png')} style={{width:20,height:20,marginLeft:5,marginTop:5}}/>
<Text style={{color:'#69e781',marginLeft:5,marginTop:5}}>Free</Text>
        </View>
        <View style={{width:'70%'}}>
        <Text>Free Private Parking is available on site (reservation is needed ) .</Text>

        </View>
    </View>
    <View style={{flexDirection:'row',marginTop:5}}>
        <View style={{width:80,height:30,marginHorizontal:10,flexDirection:'row',backgroundColor:'#b6e5bf'}}>
<Image source={require('../../image/checked-green.png')} style={{width:20,height:20,marginLeft:5,marginTop:5}}/>
<Text style={{color:'#69e781',marginLeft:5,marginTop:5}}>Free</Text>
        </View>
        <View style={{width:'70%'}}>
        <Text>Wifi is free in public areas and is free of charge </Text>

        </View>
    </View>
    <Text style={{marginLeft:20,marginTop:10,marginBottom:10}}>No Booking and Credit card fees</Text>
    </Card>
</View>

</ScrollView>
</View>
<View style={{flex:0.07}}>
<View>
    <Button onPress={()=>navigate('ChooseYourStay')} style={{justifyContent:'center',backgroundColor:'#002c52',width:'98%',marginLeft:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Select Rooms</Text>
    </Button>
</View>
</View>

            </View>


);
}
}

export default  HotelPage;
