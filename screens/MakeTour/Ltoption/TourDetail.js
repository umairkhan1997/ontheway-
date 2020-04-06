import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Icon ,Drawer, Item ,Header,Body,Card,Left,Right,Button,Picker,Input,} from 'native-base';



class TourDetail extends React.Component {
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
    render() {

        const {navigate}=this.props.navigation;
      
        return (
            <View  style={{flex:1}}>
<View style={{height:55,}} >
            <Header style={{ backgroundColor: '#213e4a', }} >
                                     <Left style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>navigate('SelectYourTour')}>
                    <Image    source={require('../../../image/left-arrow.png')} style={{height:20,width:20}}/>
                    </TouchableOpacity>
                    <Text style={{color:'white',fontSize:16,fontWeight:'500',marginLeft:20}}>Details</Text>
     </Left>
   <View style={{ marginTop:15, }}>
                    {/* <Image    source={require('../images/logo.png')} style={{height:50,width:120,}}/> */}
                    {/* <Text style={{color:'white',fontSize:16,fontWeight:'500'}}>Details</Text> */}
                    </View>
              
                {/* <TouchableOpacity onPress={()=>navigate('Cart',{id:this.props.navigation.state.params.response})}> */}
                {/* <Right  >
                <TouchableOpacity onPress={()=>this._pickImage()}>
                <Image source={require("../images/search.png")} style={{height:25,width:25,marginTop:0}}/>
                </TouchableOpacity>
                </Right> */}
                <Right />
                {/* </TouchableOpacity> */}
            </Header>
      </View>
      <KeyboardAvoidingView behavior="padding" enabled style={{ flex: 1,backgroundColor:'white' }}>
          <ScrollView style={{ flex:1 }}>
          <Image source={require('../../../image/maket2.png')} style={{marginBottom:10,width:'100%',height:Dimensions.get('window').width/2 }}/>
<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
<View style={{flexDirection:'row',width:'100%',height:200}}>
<Image source={require('../../../image/47.jpg')} style={{width:200,height:200,marginHorizontal:5}}/>
<Image source={require('../../../image/indus-scuba.jpg')} style={{width:200,height:200}}/>
<Image source={require('../../../image/maket2.png')} style={{width:200,height:200,marginHorizontal:5}}/>
</View>
</ScrollView>
<View style={{marginLeft:10,marginTop:10}}>
    <Text style={{fontSize:20,fontWeight:'500'}}>Description</Text>
    <Text style={{width:'95%',marginLeft:'2.5%',fontSize:16,fontWeight:'400'}}>Scuba diving is a form of underwater diving where the diver uses a self-contained underwater breathing apparatus (scuba) which is completely independent of surface supply, to breathe underwater. Scuba divers carry their .</Text>
</View>
<View style={{marginLeft:10,marginTop:10}}>
    <Text style={{fontSize:20,fontWeight:'500'}}>Recommended Gear:</Text>
    <Text style={{width:'95%',marginLeft:'2.5%',fontSize:16,fontWeight:'400'}}>Water bottle , Hand wash/soap/sanitizer, wipes, tooth paste and all other necessities , Sun Block and Sun glasses</Text>
</View>
<View style={{marginLeft:10,marginTop:10,marginBottom:0}}>
    <Text style={{fontSize:20,fontWeight:'500'}}>Duration:</Text>
    <Text style={{width:'95%',marginLeft:'2.5%',fontSize:16,fontWeight:'400'}}>1 Day Trip</Text>
</View>
<View style={{marginLeft:10,marginTop:10,marginBottom:0}}>
    <Text style={{fontSize:20,fontWeight:'500'}}>Facilities:</Text>
    <Text style={{width:'95%',marginLeft:'2.5%',fontSize:16,fontWeight:'400'}}>SERVICES : Standard Meals , Photography</Text>
    <Text style={{width:'95%',marginLeft:'2.5%',fontSize:16,fontWeight:'400'}}>ACTIVITIES : Sightseeing , Scuba Diving
</Text>
</View>
<View style={{marginLeft:10,marginTop:10,marginBottom:20}}>
    <Text style={{fontSize:20,fontWeight:'500'}}>Cancellation Policy:</Text>
    <Text style={{width:'95%',marginLeft:'2.5%',fontSize:16,fontWeight:'400'}}>0% of the total amount will be deducted if cancellation notified 7 days prior to the trip .</Text>
    <Text style={{width:'95%',marginLeft:'2.5%',fontSize:16,fontWeight:'400'}}>75% of the total amount will be deducted if cancellation notified 4 days prior to the trip .
</Text>
<Text style={{width:'95%',marginLeft:'2.5%',fontSize:16,fontWeight:'400'}}>100% of the total amount will be deducted if cancellation notified within the last 3 days prior to the trip unless the trip is canceled by the management .</Text>
</View>
          </ScrollView>
          </KeyboardAvoidingView>    
          <View style={{}}>
    <Button 
    onPress={()=>navigate('')}
    style={{backgroundColor:'#2d7ee4',margin:'2.5%',justifyContent:'center',width:'95%',height:40,marginBottom:10}}><Text style={{fontSize:20,fontWeight:'500',color:'white',marginBottom:10}}>Book</Text></Button>
</View>
            </View>


);
}
}

export default  TourDetail;
