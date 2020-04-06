import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Icon ,Drawer, Item ,Header,Body,Card,Left,Right,Button,Picker,Input,} from 'native-base';
import StarRating from 'react-native-star-rating';

class CompanyPage extends React.Component {
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
            <Header style={{ height:60,backgroundColor:'#213e4a' }}>
          <Left style={{flexDirection:'row',width:'40%'}}>
          <TouchableOpacity onPress={()=>navigate('Companies')}>

<Image source={require('../../image/left-arrow.png')} style={{width:20,height:20}}/>
</TouchableOpacity>
    <Text style={{fontSize:18,fontWeight:'500',width:100,marginTop:0,marginLeft:20,color:'white'}}></Text>
            </Left>

<Right>
<Image source={require('../../image/heart.png')} style={{marginHorizontal:5,width:20,height:20}}/>
{/* <Image source={require('../image/share.png')} style={{width:20,height:20,marginHorizontal:10,}}/> */}
<Image source={require('../../image/menu.png')} style={{width:20,height:20,marginHorizontal:5,}}/>

                </Right>
            </Header>
            </View>


<View style={{flex:1,backgroundColor:'#eeedee'}}>
<ScrollView>
{/* Hotel Images */}


    <View style={{flexDirection:'row'}}>
 <ScrollView horizontal={true} 
 > 

<Image source={{uri:'data:image/jpeg;base64,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'}} style={{marginHorizontal:1,width:200,height:150}}/>
<Image source={{uri:'https://1e0fa23ec67e226dd6e8-5d6b6334069713b7011bb1715b223ee4.ssl.cf1.rackcdn.com/19XFC2F67KE019020/4659c23dd7366cecd884f8ba0ab1747b.jpg'}} style={{marginHorizontal:1,width:200,height:150}}/>
<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPVEEKrfjYmIUb7c9Z9B2IvyH43PPIebQou1ud6j0cfV6YzXs_Fg'}} style={{marginHorizontal:1,width:200,height:150}}/>
<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTtrpHiYvx1aFu7uaKrzZVw89H6PZ1OROr2QXDO-YMISyFL0Gu8g'}} style={{marginHorizontal:1,width:200,height:150}}/>

</ScrollView>

</View>
  <View style={{backgroundColor:'#ffffff'}}>
<View style={{height:35,marginLeft:10,marginTop:10,flexDirection:'row'}}>
<Text style={{fontSize:18,fontWeight:'500'}}>Car Planet</Text>
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
<Text>Karachi , Pakistan </Text>
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
{/* 
<View>
    <Card style={{}}>
<Text style={{fontSize:20, fontWeight:'500',margin:10}}>Description</Text>
    <Text style={{marginLeft:10,marginBottom:10,fontSize:16}}>Featureing a fitness center , BBQ area and views of lake , Johar
    One Hotel is located in Lahore in, 27 miles from Wagah Border . Among the facilities of this property 
    are a reatuarent , a 24-hour front desk .</Text>
    </Card>
</View> */}

{/* Features SECTION */}

<View>
    <Card style={{}}>
<Text style={{fontSize:20, fontWeight:'500',margin:10}}>Features</Text>
    <Text style={{marginLeft:10,marginBottom:10,fontSize:16}}>Ac System, GPRS , CNG and Petrol both .</Text>
    <Text style={{marginLeft:10,marginBottom:10,fontSize:16}}>Rear-Seat DVD Player ,Side Airbags</Text>
    </Card>
</View>

{/* Policies SECTION */}

<View>
    <Card style={{}}>
<Text style={{fontSize:20, fontWeight:'500',margin:10}}>Policies</Text>
    {/* <Text style={{marginLeft:10,marginBottom:10,fontSize:16}}>Check-in from 12:00 PM until 12:00 AM</Text>
    <Text style={{marginLeft:10,marginBottom:10,fontSize:16}}>Check-out from 12:00 AM until 12:00 PM</Text>
    <View style={{flexDirection:'row'}}>
        <View style={{width:80,height:30,marginHorizontal:10,flexDirection:'row',backgroundColor:'#b6e5bf'}}>
<Image source={require('../image/checked-green.png')} style={{width:20,height:20,marginLeft:5,marginTop:5}}/>
<Text style={{color:'#69e781',marginLeft:5,marginTop:5}}>Free</Text>
        </View>
        <View style={{width:'70%'}}>
        <Text>Free Private Parking is available on site (reservation is needed ) .</Text>

        </View>
    </View>
    <View style={{flexDirection:'row',marginTop:5}}>
        <View style={{width:80,height:30,marginHorizontal:10,flexDirection:'row',backgroundColor:'#b6e5bf'}}>
<Image source={require('../image/checked-green.png')} style={{width:20,height:20,marginLeft:5,marginTop:5}}/>
<Text style={{color:'#69e781',marginLeft:5,marginTop:5}}>Free</Text>
        </View>
        <View style={{width:'70%'}}>
        <Text>Wifi is free in public areas and is free of charge </Text>

        </View>
    </View>
    <Text style={{marginLeft:20,marginTop:10,marginBottom:10}}>No Booking and Credit card fees</Text> */}
    </Card>
</View>

</ScrollView>
</View>
<View style={{flex:0.07}}>
<View>
    <Button 
    // onPress={()=>navigate('')}
     style={{justifyContent:'center',backgroundColor:'#002c52',width:'98%',marginLeft:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Proceed to Payment</Text>
    </Button>
</View>
</View>

            </View>


);
}
}

export default  CompanyPage;
