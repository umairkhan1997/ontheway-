import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Icon ,Drawer, Item ,Header,CheckBox, Form,Body,Card,Left,Right,Button,Picker,Input,Label} from 'native-base';


class FillInfo extends React.Component {
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
    // onStarRatingPress(rating) {
    //     this.setState({
    //       starCount: rating
    //     });
    //   }
    render() {
        
        const {navigate}=this.props.navigation;
       
        return (
            <View  style={{flex:1}}>

<View style={{marginTop:0}}>
            <Header style={{ height:60,backgroundColor:'#213e4a' }} androidStatusBarColor='#213e4a'>
          <Left style={{flexDirection:'row',}}>
          <TouchableOpacity onPress={()=>navigate('ChooseYourStay')}>

<Image source={require('../../image/left-arrow.png')} style={{width:20,height:20}}/>
</TouchableOpacity>

            </Left>
            <View style={{width:200,marginTop:5}}>

<Text style={{fontSize:18,fontWeight:'500',marginTop:10,color:'white'}}>Fill in your info</Text>
{/* <Text style={{fontSize:18,fontWeight:'500',marginTop:0,color:'white'}}>Jun 30 - Jul 3</Text> */}

</View>
<Right>
{/* <Image source={require('../image/share.png')} style={{width:20,height:20,marginHorizontal:10,}}/> */}

                </Right>
            </Header>
            </View>


            <View style={{flex:0.91,backgroundColor:'#eeedee'}}>
            {/* <KeyboardAvoidingView behavior="padding" enabled> */}
<ScrollView>


<Card style={{backgroundColor:'white'}}>
<Form>
<Item stackedLabel style={{borderBottomWidth:0,width:'95%',marginLeft:'2.5%'}}>
<Label style={{color:'#213e4a'}}>First Name</Label>
<Item >
<Input
   value={this.state.firstName}
   onChangeText={firstName => this.setState({ firstName })}
style={{fontSize:16,fontWeight:'500',borderBottomWidth:0.5,borderBottomColor:'black',}}/>
{
this.state.firstName.length == 0 ? 
    <Image source={require('../../image/star-blue.png')} style={{width:10,height:10    }} />
:
<Image source={require('../../image/checked-green.png')} style={{width:10,height:10}} />

}
</Item>
</Item>

{/* ///////Last Name */}
<Item stackedLabel style={{borderBottomWidth:0,width:'95%',marginLeft:'2.5%'}}>
<Label style={{color:'#213e4a'}}>Last Name</Label>
<Item >
<Input
   value={this.state.LastName}
   onChangeText={LastName => this.setState({ LastName })}
style={{fontSize:16,fontWeight:'500',borderBottomWidth:0.5,borderBottomColor:'black',}}/>
{
this.state.LastName.length == 0 ? 
    <Image source={require('../../image/star-blue.png')} style={{width:10,height:10    }} />
:
<Image source={require('../../image/checked-green.png')} style={{width:10,height:10}} />

}
</Item>
</Item>

<Item stackedLabel style={{borderBottomWidth:0,width:'95%',marginLeft:'2.5%'}}>
<Label style={{color:'#213e4a'}}>Email Address</Label>
<Item >
<Input
   value={this.state.email}
   onChangeText={email => this.setState({ email })}
style={{fontSize:16,fontWeight:'500',borderBottomWidth:0.5,borderBottomColor:'black',}}/>
{
this.state.email.length == 0 ? 
    <Image source={require('../../image/star-blue.png')} style={{width:10,height:10    }} />
:
<Image source={require('../../image/checked-green.png')} style={{width:10,height:10}} />

}
</Item>
</Item>


<Item stackedLabel style={{borderBottomWidth:0,width:'95%',marginLeft:'2.5%'}}>
<Label style={{color:'#213e4a'}}>Country Region</Label>
<Item >
<Input
   value={this.state.country}
   onChangeText={country => this.setState({ country })}
style={{fontSize:16,fontWeight:'500',borderBottomWidth:0.5,borderBottomColor:'black',}}/>
{
this.state.country.length == 0 ? 
    <Image source={require('../../image/star-blue.png')} style={{width:10,height:10    }} />
:
<Image source={require('../../image/checked-green.png')} style={{width:10,height:10}} />

}
</Item>
</Item>

<Item stackedLabel style={{borderBottomWidth:0,width:'95%',marginLeft:'2.5%'}}>
<Label style={{color:'#213e4a'}}>Mobile Phone</Label>
<Item >
<Input
   value={this.state.phoneNo}
   onChangeText={phoneNo => this.setState({ phoneNo })}
style={{fontSize:16,fontWeight:'500',borderBottomWidth:0.5,borderBottomColor:'black',}}/>
{
this.state.phoneNo.length == 0 ? 
    <Image source={require('../../image/star-blue.png')} style={{width:10,height:10    }} />
:
<Image source={require('../../image/checked-green.png')} style={{width:10,height:10}} />

}
</Item>
</Item>


<View style={{marginBottom:20,marginLeft:10, flexDirection:'row'}}>
<CheckBox checked={this.state.check} style={{marginTop:15,marginRight:20}}/>
<View style={{marginTop:10,}}>
    <Text style={{fontSize:14,fontWeight:'500'}}>Save Your details for future bookings</Text>
    <Text style={{fontSize:12}}>(Your email address won't be save)</Text>
</View>
</View>
</Form>
</Card>


</ScrollView>
{/* </KeyboardAvoidingView> */}
</View>

<View style={{flex:0.09}}>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<View style={{flex:1}}>
<Text style={{marginLeft:'2.5%',marginTop:'2.5%',fontSize:14,fontWeight:'500'}}>PKR 5000</Text>
<Text style={{marginLeft:'2.5%',fontSize:14,marginTop:'2.5%',fontWeight:'400'}}>PKR 846 Taxes and charges</Text>

</View>

{/* Button */}
<View style={{flex:1}}>
    <Button 
    onPress={()=>navigate('BookingOverview')}
    style={{backgroundColor:'#2d7ee4',margin:'2.5%',justifyContent:'center',width:'90%',height:'80%',marginBottom:10}}><Text style={{fontSize:14,fontWeight:'500',color:'white'}}>Add missing details</Text></Button>
</View>
</View>
</View>

</View>
        )
    }
    }
    export default FillInfo;