import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Icon ,Drawer, Item ,Header,Body,Card,Left,Right,Button,Picker,DatePicker} from 'native-base';


class MakeTripThree extends React.Component {
    static navigationOptions={
        header:null,
    } 
    constructor(props) {
        super(props);
        this.state = {
          language: undefined,
          selected:null,
          countR:1,
        }



    }
 

  render() {
    const {navigate}=this.props.navigation;
    return (
<View  style={styles.container}>
 
<ScrollView style={{marginTop:'10%'}}>

                                    {/* /////// City one ////////// */}
{/* <TouchableOpacity onPress={()=>navigate('')}> */}
{/* city and hotel */}
<View style={{width:'95%',backgroundColor:'white',marginLeft:'2.5%',marginBottom:20}}>

<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<View>

<Text  style={{marginTop:10,marginLeft:5,fontSize:20,fontWeight:'500'}}>City :</Text>
<View style={{flexDirection:'row'}}>
{/* <Image source={require('../../image/peshawar.jpg')} style={{width:120,height:60}}/> */}
<Text style={{marginTop:5,marginLeft:10,fontSize:16,fontWeight:'400'}}>Peshawar</Text>
</View>
</View>

<View>
<Text  style={{marginTop:10,marginLeft:5,fontSize:20,fontWeight:'500'}}>Hotel :</Text>
<View style={{flexDirection:'row'}}>
{/* <Image source={require('../../image/peshawar.jpg')} style={{width:120,height:60}}/> */}
<Text style={{marginTop:5,marginRight:5,fontSize:16,fontWeight:'400'}}>Peshawar Five Star Hotel</Text>
</View>
</View>
</View>



{/* arrival and departure */}
<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<View>
<Text  style={{marginTop:10,marginLeft:5,fontSize:16,fontWeight:'500'}}>Date of Arrival :</Text>
<View style={{flexDirection:'row'}}>
{/* <Image source={require('../../image/peshawar.jpg')} style={{width:120,height:60}}/> */}
<Text style={{marginTop:5,marginLeft:10,fontSize:14,fontWeight:'400'}}>24-12-2019</Text>
{/* <Text style={{marginTop:5,marginLeft:10,fontSize:16,fontWeight:'500'}}>Days</Text> */}
</View>
</View>

<View>
<Text  style={{marginTop:10,marginRight:10,fontSize:16,fontWeight:'500'}}>Date of Departure :</Text>
<View style={{flexDirection:'row'}}>
{/* <Image source={require('../../image/peshawar.jpg')} style={{width:120,height:60}}/> */}
<Text style={{marginTop:5,marginRight:5,fontSize:14,fontWeight:'400'}}>24-12-2019</Text>
{/* <Text style={{marginTop:5,marginLeft:10,fontSize:16,fontWeight:'500'}}>Days</Text> */}
</View>
</View>

</View>

{/* DAYS */}
<Text  style={{marginTop:10,marginLeft:5,fontSize:20,fontWeight:'500'}}>No of Days :</Text>
<View style={{flexDirection:'row',marginBottom:10}}>
{/* <Image source={require('../../image/peshawar.jpg')} style={{width:120,height:60}}/> */}
<Text style={{marginTop:5,marginLeft:10,fontSize:16,fontWeight:'400'}}>4</Text>
<Text style={{marginTop:5,marginLeft:10,fontSize:16,fontWeight:'400'}}>Days</Text>
</View>

</View>

                                    {/* /////// City two ////////// */}
{/* <TouchableOpacity onPress={()=>navigate('')}> */}
{/* city and hotel */}
<View style={{width:'95%',backgroundColor:'white',marginLeft:'2.5%',marginBottom:20}}>

<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<View>

<Text  style={{marginTop:10,marginLeft:5,fontSize:20,fontWeight:'500'}}>City :</Text>
<View style={{flexDirection:'row'}}>
{/* <Image source={require('../../image/peshawar.jpg')} style={{width:120,height:60}}/> */}
<Text style={{marginTop:5,marginLeft:10,fontSize:16,fontWeight:'400'}}>Peshawar</Text>
</View>
</View>

<View>
<Text  style={{marginTop:10,marginLeft:5,fontSize:20,fontWeight:'500'}}>Hotel :</Text>
<View style={{flexDirection:'row'}}>
{/* <Image source={require('../../image/peshawar.jpg')} style={{width:120,height:60}}/> */}
<Text style={{marginTop:5,marginRight:5,fontSize:16,fontWeight:'400'}}>Peshawar Five Star Hotel</Text>
</View>
</View>
</View>



{/* arrival and departure */}
<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<View>
<Text  style={{marginTop:10,marginLeft:5,fontSize:16,fontWeight:'500'}}>Date of Arrival :</Text>
<View style={{flexDirection:'row'}}>
{/* <Image source={require('../../image/peshawar.jpg')} style={{width:120,height:60}}/> */}
<Text style={{marginTop:5,marginLeft:10,fontSize:14,fontWeight:'400'}}>24-12-2019</Text>
{/* <Text style={{marginTop:5,marginLeft:10,fontSize:16,fontWeight:'500'}}>Days</Text> */}
</View>
</View>

<View>
<Text  style={{marginTop:10,marginRight:10,fontSize:16,fontWeight:'500'}}>Date of Departure :</Text>
<View style={{flexDirection:'row'}}>
{/* <Image source={require('../../image/peshawar.jpg')} style={{width:120,height:60}}/> */}
<Text style={{marginTop:5,marginRight:5,fontSize:14,fontWeight:'400'}}>24-12-2019</Text>
{/* <Text style={{marginTop:5,marginLeft:10,fontSize:16,fontWeight:'500'}}>Days</Text> */}
</View>
</View>

</View>

{/* DAYS */}
<Text  style={{marginTop:10,marginLeft:5,fontSize:20,fontWeight:'500'}}>No of Days :</Text>
<View style={{flexDirection:'row',marginBottom:10}}>
{/* <Image source={require('../../image/peshawar.jpg')} style={{width:120,height:60}}/> */}
<Text style={{marginTop:5,marginLeft:10,fontSize:16,fontWeight:'400'}}>4</Text>
<Text style={{marginTop:5,marginLeft:10,fontSize:16,fontWeight:'400'}}>Days</Text>
</View>

</View>



</ScrollView>
<View style={{justifyContent:'flex-end'}}>
<Button onPress={()=>navigate('')} style={{backgroundColor:'#9cdcfe',width:'96%',marginLeft:'2%',height:50,marginBottom:5,justifyContent:'center'}}>
   <Text style={{color:'white',fontWeight:'500',fontSize:16}}>Next</Text>
 </Button>
</View>
</View>
    );
  }
}

export default  MakeTripThree;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#213e4a',
    // marginTop:'10%'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
