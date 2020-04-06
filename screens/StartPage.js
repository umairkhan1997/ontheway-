import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Icon ,Drawer, Item ,Header,Body,Card,Left,Right,Button} from 'native-base';


class StartPage extends React.Component {
    static navigationOptions={
        header:null,
    } 
  render() {
    const {navigate}=this.props.navigation;
    return (
<View  style={styles.container}>


<View style={{width:'100%',}}>
    <Button 
    onPress={()=>navigate('MainTab')}
    style={{justifyContent:'center',marginLeft:'10%',borderColor:'white',borderWidth:0.9,marginBottom:15,width:'80%',
 backgroundColor:'#DA1A4D',borderRadius:20}}>
            <Text style={{textAlign:'center',fontSize:16,fontWeight:'500',color:'white'}}>Book It</Text>
    </Button>
    <Button 
      onPress={()=>navigate('makeTourStack')}
    style={{justifyContent:'center',marginLeft:'10%',borderColor:'white',borderWidth:0.3,backgroundColor:'white',width:'80%',borderRadius:20}}>
            <Text style={{textAlign:'center',color:'#DA1A4D',fontSize:16,fontWeight:'500',}}>Make Your Own Tour</Text>
    </Button>

</View>


</View>
    );
  }
}

export default  StartPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#213e4a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
