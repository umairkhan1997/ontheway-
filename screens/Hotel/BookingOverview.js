import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Icon ,Drawer, Item ,Header,CheckBox, Form,Body,Card,Left,Right,Button,Picker,Input,Label} from 'native-base';
// import { MapView } from 'expo';
// import ImageSlider from 'react-native-image-slider';
// import MultiSelect from 'react-native-multiple-select';
// import Calendar from 'react-native-calendar-select';
// import Modal from "react-native-modal";
import StarRating from 'react-native-star-rating';

class BookingOverview extends React.Component {
    static navigationOptions={
        header:null,
       

    } 
    constructor(props) {
        super(props);
        this.state = {
          starCount: 3.5,
          firstName:'',
          LastName:'',
          email:''
        ,country:'',phoneNo:'',check:true
        }
    }
    onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
      }
    render() {
        
        const {navigate}=this.props.navigation;
       
        return (
            <View  style={{flex:1}}>

<View style={{marginTop:0}}>
            <Header style={{ height:60,backgroundColor:'#213e4a' }} androidStatusBarColor='#213e4a'>
          <Left style={{flexDirection:'row',}}>
          <TouchableOpacity onPress={()=>navigate('FillInfo')}>

<Image source={require('../../image/left-arrow.png')} style={{width:20,height:20}}/>
</TouchableOpacity>

            </Left>
            <View style={{width:200,marginTop:5}}>

<Text style={{fontSize:18,fontWeight:'500',marginTop:10,color:'white'}}>Booking Overview</Text>
{/* <Text style={{fontSize:18,fontWeight:'500',marginTop:0,color:'white'}}>Jun 30 - Jul 3</Text> */}

</View>
<Right>
{/* <Image source={require('../../image/share.png')} style={{width:20,height:20,marginHorizontal:10,}}/> */}

                </Right>
            </Header>
            </View>


            <View style={{flex:0.91,backgroundColor:'#e1e1e9'}}>
            <KeyboardAvoidingView behavior="padding" enabled>
<ScrollView>

<Card style={{width:'100%',height:100,justifyContent:'center'}}>
<Text style={{fontSize:16,fontWeight:'500',marginLeft:20}}>No Credit Card needed to book</Text>
<Text style={{fontSize:14,fontWeight:'400',marginLeft:20,width:'80%'}}>A Credit card isn't required for this reservation , You'll pay the property during your stay</Text>
</Card>

<Card style={{marginTop:-3,width:'100%'}}>
<View style={{flexDirection:'row',justifyContent:'space-between',height:200,width:'100%'}}>
<View style={{flex:1,width:'95%',height:'95%'}}>
<Image source={require('../../image/Dhaka-Hotels.jpg')} style={{width:'100%',height:'100%',marginTop:5,marginBottom:5}}/>
</View>
<View style={{flex:1,}}>
<Text style={{fontSize:16,fontWeight:'500',marginLeft:5,marginTop:5}}>Hotel Mayfairs</Text>
<Text style={{fontSize:14,fontWeight:'400',marginLeft:5,marginTop:5}}>50-52 , E-2 Commercial Zone Old Al-Falah Road 
Liberty Market  Gulberg Lahore Pakistan</Text>
<View style={{width:'30%',marginTop:5,marginLeft:5}}>
  <StarRating
        disabled={false}
        maxStars={5}
        starSize={15}
        fullStarColor='gold'
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        />
        </View>

</View>
</View>
</Card>

<Card>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10}}>
<Text style={{fontSize:16,fontWeight:'500',marginLeft:5}}>Check-in</Text>
<Text style={{fontSize:16,fontWeight:'400',marginRight:5}}>Sun Jul 28 2019</Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10}}>
<Text style={{fontSize:16,fontWeight:'500',marginLeft:5}}>Check-out</Text>
<Text style={{fontSize:16,fontWeight:'400',marginRight:5}}>Mon Jul 29 2019</Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10}}>
<Text style={{fontSize:16,fontWeight:'500',marginLeft:5}}>For</Text>
<Text style={{fontSize:16,fontWeight:'400',marginRight:5}}>1-Night , 1 Room</Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10}}>
<View>   
<Text style={{fontSize:16,fontWeight:'500',marginLeft:5}}>Standard Suite</Text>
<Text style={{fontSize:14,fontWeight:'500',marginLeft:5}}>No - Refundable</Text>
</View>
<Text style={{fontSize:16,fontWeight:'400',marginRight:5}}>PKR 5400</Text>
    </View>
</Card>
<View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#04934b',height:50}}>
<Text style={{fontSize:16,fontWeight:'500',color:'white',marginLeft:5,marginTop:10}}>Price</Text>
<Text style={{fontSize:16,fontWeight:'400',marginRight:5,color:'white',marginTop:10}}>PKR 5,400</Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',height:50}}>
<Text style={{fontSize:16,fontWeight:'500',color:'black',marginLeft:5,marginTop:10}}>Excluded charges</Text>
<Text style={{fontSize:14,fontWeight:'400',marginRight:5,color:'black',marginTop:10}}>approx PKR 664</Text>
    </View>

                {/* STANDARD */}
    <Card>
        <Text style={{marginLeft:10,marginTop:20,fontWeight:'500',fontSize:16}}>Standard Suite</Text>
        <View style={{marginTop:15,flexDirection:'row'}}>
            <Image source={require('../../image/exclamation.png')} style={{marginLeft:10,height:20,width:20}}/>
            <Text style={{fontSize:14,marginLeft:10}}>Non-Refundable</Text>
        </View>
        <View style={{marginTop:15,flexDirection:'row'}}>
            <Image source={require('../../image/breakfast.png')} style={{marginLeft:10,height:20,width:20}}/>
            <Text style={{fontSize:14,marginLeft:10}}>Breakfast available pay at the property (PKR 200)</Text>
        </View>
        <View style={{marginTop:15,flexDirection:'row'}}>
            <Image source={require('../../image/team.png')} style={{marginLeft:10,height:20,width:20}}/>
            <Text style={{fontSize:14,marginLeft:10}}>Guest staying here </Text>
        </View>
        <View style={{marginTop:15,marginBottom:15,flexDirection:'row'}}>
            <Image source={require('../../image/hotel-png.png')} style={{marginLeft:10,height:20,width:20}}/>
            <Text style={{fontSize:14,marginLeft:10}}>Booking for Hotel Hotel Mayfairs</Text>
        </View>
    </Card>
    <View style={{marginVertical:10,justifyContent:'center'}}>
    <Text style={{width:'90%',marginLeft:'5%',textAlign:'center'}}>
Your booking is directly with Hotel Mayfairs , By completing this Booking you agree to the On tThe Way Privacy Statement,General Terms & Conditions 
    </Text>
    </View>

</ScrollView>
</KeyboardAvoidingView>
</View>

<View style={{flex:0.09}}>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<View style={{flex:1}}>
<Text style={{marginLeft:'2.5%',fontSize:14,marginTop:'2.5%',fontWeight:'500'}}>PKR 5000</Text>
<Text style={{marginLeft:'2.5%',marginTop:'2.5%',fontSize:14,fontWeight:'400'}}>PKR 846 Taxes and charges</Text>

</View>

{/* Button */}
<View style={{flex:1}}>
    <Button style={{backgroundColor:'#2d7ee4',margin:'2.5%',justifyContent:'center',width:'90%',height:'80%',marginBottom:10}}><Text style={{fontSize:14,fontWeight:'500',color:'white'}}>Book Now</Text></Button>
</View>
</View>
</View>

</View>
        )
    }
    }
    export default BookingOverview;