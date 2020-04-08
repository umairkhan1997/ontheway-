import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Icon ,Drawer, Item ,Header,Body,Card,Left,Right,Button,Picker,DatePicker} from 'native-base';


class NoofPeople extends React.Component {
    static navigationOptions={
        header:null,
    } 
    constructor(props) {
        super(props);
        this.state = {
          language: undefined,
        }


        this.setDate = this.setDate.bind(this);
    }

    onValueChange(value) {
        this.setState({
          selected: value
        });
      }

      setDate(newDate) {
        //  this.setState({ chosenDate: newDate });
        let val = newDate.toLocaleDateString();
        val.toString();
        // console.log("splitted",val.split("/"))
        let sec = val.split("/");
        let bec = sec[2] + "-" + sec[0] + "-" + sec[1];
        console.log("THE NEW DATE", bec);
        this.setState({ chosenDate: bec, startDate: bec });
      }
  render() {
    const {navigate}=this.props.navigation;
    return (
<View  style={styles.container}>
 
<ScrollView style={{marginTop:'10%'}}>

<View>
    <Text style={{fontSize:18,fontWeight:'500',color:'white',marginLeft:10}}>Select Number of People :</Text>
    <Picker
                //   selectedValue={this.state.language}
                  textStyle={{ fontSize: 8 }}
                  style={{
                    marginTop:20,
                    height: 50,
                    width: "95%",
                    color: "black",
                    marginLeft: "2.5%",backgroundColor:'white'
                  }}
                  selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
                >
               <Picker.Item label="1 - 3 persons" value="3" />
              <Picker.Item label="4 - 7 persons" value="7" />
              <Picker.Item label="8 - 10 persons" value="10" />
              <Picker.Item label="11 = 14 persons" value="14" />
              <Picker.Item label="15 - 18 persons" value="18" />
                </Picker>

</View>

<View style={{marginTop:30}}>
    <Text style={{fontSize:18,fontWeight:'500',color:'white',marginLeft:10}}>Select Date of arrival at first city :</Text>
   <View style={{backgroundColor:'white', height: 50,marginTop:20,
                    width: "95%",
                    marginLeft: "2%",}}>
    <DatePicker
                      defaultDate={new Date()}
                      minimumDate={new Date()}
                      // maximumDate={new Date(2018, 12, 31)}
                      dateFormat="YYYY-MM-DD"
                      locale={"en"}
                      timeZoneOffsetInMinutes={undefined}
                      modalTransparent={false}
                      animationType={"fade"}
                      androidMode={"default"}
                      placeHolderText={new Date().toDateString()}
                      textStyle={{ color: "green",marginTop:3 }}
                      placeHolderTextStyle={{ color: "black",marginTop:3 }}
                      onDateChange={this.setDate}
                      disabled={false}
                      
                      />
                      </View>
    </View>
</ScrollView>
<View style={{justifyContent:'flex-end'}}>
<Button onPress={()=>navigate('SelectHotelsDi')} style={{backgroundColor:'#9cdcfe',width:'96%',marginLeft:'2%',height:50,marginBottom:5,justifyContent:'center'}}>
   <Text style={{color:'white',fontWeight:'500',fontSize:16}}>Next</Text>
 </Button>
</View>
</View>
    );
  }
}

export default  NoofPeople;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#213e4a',
    // marginTop:'10%'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
