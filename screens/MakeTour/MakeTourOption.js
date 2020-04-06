import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Icon ,Drawer, Item ,Header,Body,Card,Left,Right,Button} from 'native-base';


class MakeTourOption extends React.Component {
    static navigationOptions={
        header:null,
    } 
  render() {
    const {navigate}=this.props.navigation;
    return (
<View  style={styles.container}>


<View style={{width:'100%',}}>
{/* <Button 
      onPress={()=>navigate('')}
    style={{justifyContent:'center',marginLeft:'10%',borderColor:'white',borderWidth:0.3,backgroundColor:'white',width:'80%',borderRadius:20}}>
            <Text style={{textAlign:'center',color:'#DA1A4D',fontSize:14,fontWeight:'500',}}>Local Travellers</Text>
    </Button> */}
    <Button 
    onPress={()=>navigate('LocalTraStack')}
    style={{justifyContent:'center',marginLeft:'10%',borderColor:'white',borderWidth:0.9,marginBottom:15,width:'80%',
 backgroundColor:'#DA1A4D',borderRadius:20}}>
            <Text style={{textAlign:'center',fontSize:16,fontWeight:'500',color:'white'}}>Local Travellers</Text>
    </Button>
    <Button 
      onPress={()=>navigate('MakeTripOne')}
    style={{justifyContent:'center',marginLeft:'10%',borderColor:'white',borderWidth:0.3,marginBottom:15,backgroundColor:'white',width:'80%',borderRadius:20}}>
            <Text style={{textAlign:'center',color:'#DA1A4D',fontSize:16,fontWeight:'500',}}>Make Trip</Text>
    </Button>
    {/* <Button 
    onPress={()=>navigate('BookHome')}
    style={{justifyContent:'center',marginLeft:'10%',borderColor:'white',borderWidth:0.9,marginBottom:15,width:'80%',
 backgroundColor:'#DA1A4D',borderRadius:20}}>
            <Text style={{textAlign:'center',fontSize:14,fontWeight:'500',color:'white'}}>Make Trip</Text>
    </Button> */}
    <Button 
    onPress={()=>navigate('SelectPack')}
    style={{justifyContent:'center',marginLeft:'10%',borderColor:'white',borderWidth:0.9,marginBottom:15,width:'80%',
 backgroundColor:'#DA1A4D',borderRadius:20}}>
            <Text style={{textAlign:'center',fontSize:16,fontWeight:'500',color:'white'}}>Planned</Text>
    </Button>
    {/* <Button 
      onPress={()=>navigate('')}
    style={{justifyContent:'center',marginLeft:'10%',borderColor:'white',borderWidth:0.3,backgroundColor:'white',width:'80%',borderRadius:20}}>
            <Text style={{textAlign:'center',color:'#DA1A4D',fontSize:14,fontWeight:'500',}}>Planned</Text>
    </Button> */}

</View>


</View>
    );
  }
}

export default  MakeTourOption;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#213e4a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
