import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Icon ,Drawer, Item ,Header,Body,Card,Left,Right,Button,Picker,DatePicker} from 'native-base';
import StarRating from 'react-native-star-rating';

class SelectHotelsDi extends React.Component {
    static navigationOptions={
        header:null,
    } 
    constructor(props) {
        super(props);
        this.state = {
          language: undefined,
          countR:1,
        }
    }
    onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
      }

      _incrementCountR = () => {
        this.setState(prevState => ({ countR: prevState.countR + 1 }));
      };
      _decrementR = () => {
        if (this.state.countR == 1) {
          alert("Can't go to below 1");
        } else {
          this.setState(prevState => ({ countR: prevState.countR - 1 }));
        }
      };
  render() {
    const {navigate}=this.props.navigation;
    return (
<View  style={styles.container}>
<View style={{justifyContent:'flex-start',marginTop:42}}>
<Text style={{fontSize:22,fontWeight:'500',color:'white',textAlign:'center'}}>Cities Will visit to way Hunza</Text>
</View>
<ScrollView style={{}}>
        
<View style={{marginVertical:15}}/>



                                    {/* /////// Peshawar ////////// */}
{/* <TouchableOpacity onPress={()=>navigate('')}> */}
<View style={{width:'95%',backgroundColor:'white',marginLeft:'2.5%',marginBottom:20}}>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginLeft:10,marginRight:10}}>
<View style={{flexDirection:'row'}}>
<Image source={require('../../../../image/peshawar.jpg')} style={{width:120,height:60}}/>
<Text style={{marginTop:30,marginLeft:5,fontSize:20,fontWeight:'500'}}>Peshawar</Text>
</View>
<View>
    <Text style={{fontWeight:'500',color:'red'}}>Unselect</Text>
</View>
</View>


    <Text style={{fontWeight:'500',marginLeft:10,marginTop:20}}>Hotel where you will stay</Text>
<View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:10,marginTop:10}}> 
<View style={{width:'30%'}}>
<Image source={require('../../../../image/banner2.jpg')} style={{width:'90%',height:80,marginVertical:5,marginHorizontal:5,borderWidth:0.4,borderColor:'gray'}}/>
</View>
<View style={{width:'70%'}}>
<Text>Islamabad Five Star Hotel</Text>
<View style={{width:'40%',marginTop:5}}>
  <StarRating
        disabled={false}
        maxStars={5}
        starSize={10}
        fullStarColor='gold'
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        />
        </View>
        <View style={{flexDirection:'row',marginTop:5}}>
<Image source={require('../../../../image/place.png')} style={{width:20,height:20}}/>
<Text> Islamabd Punjab , Pakistan</Text>
        </View>
        <View style={{flexDirection:'row',marginTop:5}}>
{/* <Image source={require('../../../image/place.png')} style={{width:20,height:20}}/> */}
<Text style={{fontWeight:'500'}}>Rs .</Text>
<Text>3000</Text>
<Text> per room</Text>
        </View>
</View>
</View>

<View style={{flexDirection:'row',marginTop:5,marginLeft:12}}>
{/* <Image source={require('../../../image/place.png')} style={{width:20,height:20}}/> */}
<Text>1 Room </Text>
<Text style={{fontWeight:'500'}}>For .</Text>
<Text>1 - 3 </Text>
<Text>persons </Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'flex-end',marginVertical:5,marginRight:10}}>
{/* <Image source={require('../../../image/place.png')} style={{width:20,height:20}}/> */}
 
<TouchableOpacity onPress={()=>navigate('ChangeHotelDi')}>
<Text style={{color:'red'}}>Change Hotel</Text>
</TouchableOpacity>
        </View>

<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<View style={{ flexDirection: "row", marginRight: 10 }}>
                          <View>
                            <TouchableOpacity onPress={() => this._decrementR()}>
                              <Text
                                style={{
                                  marginLeft: 10,
                                  fontSize: 20,
                                  borderWidth: 1,
                                  width: 30,
                                  textAlign: "center",
                                  borderColor: "white",
                                  color: "white",
                                  backgroundColor: "#213e4a"
                                }}
                              >
                                -
                              </Text>
                            </TouchableOpacity>
                          </View>
                          <Text
                            style={{
                              fontSize: 20,
                             // fontWeight:'500',
                              // borderWidth: 1,
                              width: 30,
                              textAlign: "center",
                              color: "black",
                              // borderColor: "white"
                            }}
                          >
                            {this.state.countR}
                          </Text>
                          <View>
                            <TouchableOpacity
                              onPress={() => this._incrementCountR()}
                            >
                              <Text
                                style={{
                                  fontSize: 20,
                                  borderWidth: 1,
                                  width: 30,
                                  textAlign: "center",
                                  borderColor: "white",
                                  backgroundColor: "#213e4a",
                                  color: "white"
                                }}
                              >
                                +
                              </Text>
                            </TouchableOpacity>
                          </View>
                          <Text style={{marginTop:5}}> Select Days to stay</Text>
                        </View>
                        <View style={{marginRight:10}}>
<Text>Total</Text>
<Text>Rs. 4000</Text>
                        </View>
</View>
</View>
{/* </TouchableOpacity> */}




                             {/* /////// Peshawar ////////// */}
{/* <TouchableOpacity onPress={()=>navigate('')}> */}
<View style={{width:'95%',backgroundColor:'white',marginLeft:'2.5%',marginBottom:20}}>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginLeft:10,marginRight:10}}>
<View style={{flexDirection:'row'}}>
<Image source={require('../../../../image/islamabad.jpg')} style={{width:120,height:60}}/>
<Text style={{marginTop:30,marginLeft:5,fontSize:20,fontWeight:'500'}}>Islamabad</Text>
</View>
<View>
    <Text style={{fontWeight:'500',color:'red'}}>Unselect</Text>
</View>
</View>


    <Text style={{fontWeight:'500',marginLeft:10,marginTop:20}}>Hotel where you will stay</Text>
<View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:10,marginTop:10}}> 
<View style={{width:'30%'}}>
<Image source={require('../../../../image/banner2.jpg')} style={{width:'90%',height:80,marginVertical:5,marginHorizontal:5,borderWidth:0.4,borderColor:'gray'}}/>
</View>
<View style={{width:'70%'}}>
<Text>Peshawar Five Star Hotel</Text>
<View style={{width:'40%',marginTop:5}}>
  <StarRating
        disabled={false}
        maxStars={5}
        starSize={10}
        fullStarColor='gold'
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        />
        </View>
        <View style={{flexDirection:'row',marginTop:5}}>
<Image source={require('../../../../image/place.png')} style={{width:20,height:20}}/>
<Text> Islamabd Punjab , Pakistan</Text>
        </View>
        <View style={{flexDirection:'row',marginTop:5}}>
{/* <Image source={require('../../../image/place.png')} style={{width:20,height:20}}/> */}
<Text style={{fontWeight:'500'}}>Rs .</Text>
<Text>3000</Text>
<Text> per room</Text>
        </View>
</View>
</View>

<View style={{flexDirection:'row',marginTop:5,marginLeft:12}}>
{/* <Image source={require('../../../image/place.png')} style={{width:20,height:20}}/> */}
<Text>1 Room </Text>
<Text style={{fontWeight:'500'}}>For .</Text>
<Text>1 - 3 </Text>
<Text>persons </Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'flex-end',marginVertical:5,marginRight:10}}>
{/* <Image source={require('../../../image/place.png')} style={{width:20,height:20}}/> */}
 
<TouchableOpacity onPress={()=>navigate('ChangeHotelDi')}>
<Text style={{color:'red'}}>Change Hotel</Text>
</TouchableOpacity>
        </View>

<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<View style={{ flexDirection: "row", marginRight: 10 }}>
                          <View>
                            <TouchableOpacity onPress={() => this._decrementR()}>
                              <Text
                                style={{
                                  marginLeft: 10,
                                  fontSize: 20,
                                  borderWidth: 1,
                                  width: 30,
                                  textAlign: "center",
                                  borderColor: "white",
                                  color: "white",
                                  backgroundColor: "#213e4a"
                                }}
                              >
                                -
                              </Text>
                            </TouchableOpacity>
                          </View>
                          <Text
                            style={{
                              fontSize: 20,
                             // fontWeight:'500',
                              // borderWidth: 1,
                              width: 30,
                              textAlign: "center",
                              color: "black",
                              // borderColor: "white"
                            }}
                          >
                            {this.state.countR}
                          </Text>
                          <View>
                            <TouchableOpacity
                              onPress={() => this._incrementCountR()}
                            >
                              <Text
                                style={{
                                  fontSize: 20,
                                  borderWidth: 1,
                                  width: 30,
                                  textAlign: "center",
                                  borderColor: "white",
                                  backgroundColor: "#213e4a",
                                  color: "white"
                                }}
                              >
                                +
                              </Text>
                            </TouchableOpacity>
                          </View>
                          <Text style={{marginTop:5}}> Select Days to stay</Text>
                        </View>
                        <View style={{marginRight:10}}>
<Text>Total</Text>
<Text>Rs. 4000</Text>
                        </View>
</View>
</View>

                               
{/* </TouchableOpacity> */}


                           {/* /////// Peshawar ////////// */}
{/* <TouchableOpacity onPress={()=>navigate('')}> */}
<View style={{width:'95%',backgroundColor:'white',marginLeft:'2.5%',height:270,marginBottom:20}}>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginLeft:10,marginRight:10}}>
<View style={{flexDirection:'row'}}>
<Image source={require('../../../../image/islamabad.jpg')} style={{width:120,height:60}}/>
<Text style={{marginTop:30,marginLeft:5,fontSize:20,fontWeight:'500'}}>Peshawar</Text>
</View>
<View>
    <Text style={{fontWeight:'500',color:'red'}}>Unselect</Text>
</View>
</View>


    <Text style={{fontWeight:'500',marginLeft:10,marginTop:20}}>Hotel where you will stay</Text>
<View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:10,marginTop:10}}> 
<View style={{width:'30%'}}>
<Image source={require('../../../../image/banner2.jpg')} style={{width:'90%',height:80,marginVertical:5,marginHorizontal:5,borderWidth:0.4,borderColor:'gray'}}/>
</View>
<View style={{width:'70%'}}>
<Text>Peshawar Five Star Hotel</Text>
<View style={{width:'40%',marginTop:5}}>
  <StarRating
        disabled={false}
        maxStars={5}
        starSize={10}
        fullStarColor='gold'
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        />
        </View>
        <View style={{flexDirection:'row',marginTop:5}}>
<Image source={require('../../../../image/place.png')} style={{width:20,height:20}}/>
<Text> Islamabd Punjab , Pakistan</Text>
        </View>
        <View style={{flexDirection:'row',marginTop:5}}>
{/* <Image source={require('../../../image/place.png')} style={{width:20,height:20}}/> */}
<Text style={{fontWeight:'500'}}>Rs .</Text>
<Text>3000</Text>
<Text> per room</Text>
        </View>
</View>
</View>

<View style={{flexDirection:'row',marginTop:5,marginLeft:12}}>
{/* <Image source={require('../../../image/place.png')} style={{width:20,height:20}}/> */}
<Text>1 Room </Text>
<Text style={{fontWeight:'500'}}>For .</Text>
<Text>1 - 3 </Text>
<Text>persons </Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'flex-end',marginTop:5,marginRight:10}}>
{/* <Image source={require('../../../image/place.png')} style={{width:20,height:20}}/> */}
<TouchableOpacity onPress={()=>navigate('ChangeHotelDi')}>
<Text style={{color:'red'}}>Change Hotel</Text>
</TouchableOpacity>
        </View>

</View>
{/* </TouchableOpacity> */}


</ScrollView>
<View style={{justifyContent:'flex-end'}}>
<View>
    <Button onPress={()=>navigate('')} style={{justifyContent:'center',backgroundColor:'#9cdcfe',width:'98%',marginLeft:'1%'}}>
        <Text style={{fontSize:16,fontWeight:'500',color:'white'}}>Finish</Text>
    </Button>
</View>
</View>
</View>
    );
  }
}

export default  SelectHotelsDi;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#213e4a',
    // marginTop:'10%'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
