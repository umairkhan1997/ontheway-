import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Icon ,Drawer, Item ,Header,Body,Card,Left,Right,Button} from 'native-base';


class SelectDiPack extends React.Component {
    static navigationOptions={
        header:null,
    } 
  render() {
    const {navigate}=this.props.navigation;
    return (
<View  style={styles.container}>
 
<ScrollView style={{marginTop:'10%'}}>
<View style={{width:'90%',marginLeft:'5%',marginVertical:30}}>
        <Text style={{textAlign:'center',fontSize:20,fontWeight:'500',color:'white'}}>Select Our Silver Package to make your tour memorable</Text>
    </View>
    <TouchableOpacity onPress={()=>navigate('NoofPeople')}>
<View style={{width:'95%',marginLeft:'2.5%',height:250,marginBottom:20}}>
<Image source={require('../../../../image/hunza.jpg')} style={{width:'100%',height:'100%',borderRadius:20}}/>
<View style={{zIndex:1,position:'absolute',top:100,left:'32%'}}>
    <Text style={{color:'white',fontSize:20,fontWeight:'500',fontWeight:'500',}}>Tour to Hunza</Text>
</View>
</View>
    </TouchableOpacity>
<View style={{width:'95%',marginLeft:'2.5%',height:250,marginBottom:20}}>
<Image source={require('../../../../image/skardu.jpg')} style={{width:'100%',height:'100%',borderRadius:20}}/>
<View style={{zIndex:1,position:'absolute',top:100,left:'32%'}}>
    <Text style={{color:'white',fontSize:20,fontWeight:'500',fontWeight:'500',}}>Tour to Skardu</Text>
</View>
</View>
<View style={{width:'95%',marginLeft:'2.5%',height:250,marginBottom:20}}>
<Image source={require('../../../../image/hunza.jpg')} style={{width:'100%',height:'100%',borderRadius:20}}/>
</View>

</ScrollView>
</View>
    );
  }
}

export default  SelectDiPack;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#213e4a',
    // marginTop:'10%'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
