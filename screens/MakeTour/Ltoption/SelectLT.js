import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Icon ,Drawer, Item ,Header,Body,Card,Left,Right,Button,Picker,Input,} from 'native-base';



class SelectLT extends React.Component {
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
      
        return (
            <View  style={{flex:1}}>
<View style={{height:55, marginTop: 0 }} >
            <Header style={{ backgroundColor: '#213e4a', }} >
                                     <Left >
                    <TouchableOpacity onPress={()=>navigate('MakeTourOption')}>
                    <Image    source={require('../../../image/left-arrow.png')} style={{height:20,width:20}}/>
                    </TouchableOpacity>
     </Left>
   <View style={{ marginTop:15, }}>
                    {/* <Image    source={require('../images/logo.png')} style={{height:50,width:120,}}/> */}
                    <Text style={{color:'white',fontSize:16,fontWeight:'500'}}>Select to enjoy your Vacant</Text>
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

<Card style={{width:'95%',marginLeft:'2.5%'}}>
    <TouchableOpacity>
<Image source={require('../../../image/maketour1.jpg')} style={{width:'100%',height:150 }}/>
<View>
<View style={{flexDirection:'row',marginTop:10}}>
<Image source={require('../../../image/ktg.jpg')} style={{width:30,height:30,borderRadius:20,marginLeft:10,}}/>
<Text style={{fontSize:18,fontWeight:'500',marginLeft:10,color:'#213e4a',marginTop:0}}>Karachi Travellers Group</Text>
</View>
<Text style={{fontSize:14,marginLeft:10,color:'#213e4a',marginTop:10}}>Explore northern areas in stunning autumn season, select and book ticket tours with signature services of KTG</Text>
<View style={{flexDirection:'row',marginVertical:10,justifyContent:'flex-end'}}>
<Text style={{fontSize:14,marginLeft:10,fontWeight:'500',color:'#213e4a',marginTop:10}}>Rs per person # </Text>
<Text style={{fontSize:14,color:'#213e4a',marginTop:10}}>1599/. </Text>
</View>
</View>
</TouchableOpacity>
</Card>

<Card style={{width:'95%',marginLeft:'2.5%'}}>
    <TouchableOpacity onPress={()=>navigate('SelectYourTour')}>
<Image source={require('../../../image/maket2.png')} style={{width:'100%',height:150 }}/>
<View>
<View style={{flexDirection:'row',marginTop:10}}>
<Image source={require('../../../image/ktg.jpg')} style={{width:30,height:30,borderRadius:20,marginLeft:10,}}/>
<Text style={{fontSize:18,fontWeight:'500',marginLeft:10,color:'#213e4a',marginTop:0}}>Pakistan Tours Travel</Text>
</View>
<Text style={{fontSize:14,marginLeft:10,color:'#213e4a',marginVertical:10}}>Come with us to Travel Far Enough to meet yourself ,Explore northern areas in stunning autumn season</Text>
{/* <View style={{flexDirection:'row',marginVertical:10,justifyContent:'flex-end'}}>
<Text style={{fontSize:14,marginLeft:10,fontWeight:'500',color:'#213e4a',marginTop:10}}>Rs per person # </Text>
<Text style={{fontSize:14,color:'#213e4a',marginTop:10}}>1599/. </Text>
</View> */}
</View>
</TouchableOpacity>
</Card>

<Card style={{width:'95%',marginLeft:'2.5%'}}>
    <TouchableOpacity>
<Image source={require('../../../image/maketour1.jpg')} style={{width:'100%',height:150 }}/>
<View>
<View style={{flexDirection:'row',marginTop:10}}>
<Image source={require('../../../image/ktg.jpg')} style={{width:30,height:30,borderRadius:20,marginLeft:10,}}/>
<Text style={{fontSize:18,fontWeight:'500',marginLeft:10,color:'#213e4a',marginTop:0}}>Karachi Travellers Group</Text>
</View>
<Text style={{fontSize:14,marginLeft:10,color:'#213e4a',marginTop:10}}>Explore northern areas in stunning autumn season, select and book ticket tours with signature services of KTG</Text>
<View style={{flexDirection:'row',marginVertical:10,justifyContent:'flex-end'}}>
<Text style={{fontSize:14,marginLeft:10,fontWeight:'500',color:'#213e4a',marginTop:10}}>Rs per person # </Text>
<Text style={{fontSize:14,color:'#213e4a',marginTop:10}}>1599/. </Text>
</View>
</View>
</TouchableOpacity>
</Card>



          </ScrollView>
          </KeyboardAvoidingView>    
            </View>


);
}
}

export default  SelectLT;
