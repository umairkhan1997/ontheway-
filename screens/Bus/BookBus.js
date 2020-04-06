import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity,FlatList} from 'react-native';
import { Icon ,Drawer,Input, Item ,Header,Body,Card,Left,Right,Button,Picker} from 'native-base';
import BookDrawer from '../BookDrawer'
import ImageSlider from 'react-native-image-slider';
import DatePicker from 'react-native-datepicker'

class BookBus extends React.Component {
    static navigationOptions={
        header:null,
    } 
    constructor(props) {
        super(props);
        this.state = {
          starCount: 3.5,
          selected: "Recent",
          show:'HIDE',
          shows:false,
          from:'',
          startDate: new Date().toDateString(),  
          endDate: new Date().toDateString(),
          isModalVisible: false,
          date:new Date(),
        }
        this.backPressSubscriptions = new Set();
        // this.confirmDate = this.confirmDate.bind(this);
        // this.openCalendar = this.openCalendar.bind(this);
    } 

    

    onValueChange(value) {
        this.setState({
          selected: value
        });
      }
      openDrawer = () => {
        this.drawer._root.open();
      };
      closeDrawer = () => {
        this.drawer._root.close();
      };
    
      showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
      };
     
      hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
      };
     
      handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        this.hideDateTimePicker();
      };


  render() {
    const images = [
       'data:image/jpeg;base64,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',
      'https://autolook.com.pk/blog/wp-content/uploads/2017/03/53-640x360.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScQ2fVBDik_VRpaje1RHTf7oxMWBqvSjT5MuVwp17Z8fOdaHIjcA'
      ];
    const {navigate}=this.props.navigation;
    const textColor = this.props.selected ? 'red' : 'black';
    console.log(this.state.startDate,this.state.endDate,'date selected')
    let customI18n = {
        'w': ['', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
        'weekday': ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        'text': {
          'start': 'Check in',
          'end': 'Check out',
          'date': 'Date',
          'save': 'Confirm',
          'clear': 'Reset'
        },
        'date': 'DD / MM'  // date format
      };
      let color = {
        subColor: '#f0f0f0'
      };
    return (
      <Drawer
    ref={ref => {
      this.drawer = ref;
    }}
    content={<BookDrawer menu={this.props} />}
    onClose={() => this.closeDrawer()}
    openDrawerOffset={0.3}
    panCloseMask={0.3}
  >
<View  style={{flex:1}}>

       {/* Header section */}
       <View style={{marginTop:0}}>
            <Header style={{ height:52,backgroundColor:'#213e4a' }}>
          <Left >
          <TouchableOpacity onPress={this.openDrawer.bind(this)}>

<Image source={require('../../image/menus.png')} style={{width:20,height:20}}/>
</TouchableOpacity>
            </Left>
            <View style={{marginLeft:'25%'}}>
    <Text style={{fontSize:20,fontWeight:'500',marginTop:15,color:'white'}}>On The Way</Text>
</View>
<Right>

                </Right>
            </Header>
            </View>

            <View style={{flex:1,justifyContent:'center',backgroundColor:'#dfdfdf'}}>

<ScrollView>




{/* IMAGE SLIDER */}
<View>
<SafeAreaView style={styles.container}>
        <View style={styles.content1}>
          <Text style={styles.contentText}>Cars</Text>
        </View>
        <ImageSlider
          loopBothSides
          autoPlayWithInterval={3000}
          images={images}
          customSlide={({ index, item, style, width }) => (
            // It's important to put style here because it's got offset inside
            <View key={index} style={[style, styles.customSlide]}>
              <Image source={{ uri: item }} style={styles.customImage} />
            </View>
          )}
          customButtons={(position, move) => (
            <View style={styles.buttons}>
              {images.map((image, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    underlayColor="#ccc"
                    onPress={() => move(index)}
                    style={styles.button}
                  >
                    <Text style={position === index && styles.buttonSelected}>
                      {index + 1}
                    </Text>
                  </TouchableHighlight>
                );
              })}
            </View>
          )}
        />
        
      </SafeAreaView>
</View>



<View>
<TouchableOpacity onPress={this._onPress}>
        <View>
          <Text style={{color: textColor}}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
</View>


{/* BODY PART */}
<View>
<Card style={{width:'100%',height:320,marginTop:-5,backgroundColor:'#213e4a'}}>
<TouchableOpacity onPress={()=>navigate('')}>
<Text style={{color:'white',fontSize:16,fontWeight:'500',marginTop:10,marginBottom:5,marginLeft:20}}>From</Text>
<Text style={{color:'white',fontSize:16,fontWeight:'500',marginVertical:10,marginLeft:20}}>Select Place</Text>
</TouchableOpacity>
<View style={{borderBottomColor:'white',borderBottomWidth:0.6,width:'100%'}}/>

<TouchableOpacity onPress={()=>navigate('')}>
<Text style={{color:'white',fontSize:16,fontWeight:'500',marginTop:10,marginBottom:5,marginLeft:20}}>To</Text>
<Text style={{color:'white',fontSize:16,fontWeight:'500',marginVertical:10,marginLeft:20}}>Select Place</Text>
</TouchableOpacity>
<View style={{borderBottomColor:'white',borderBottomWidth:0.6,width:'100%'}}/>
{/* 
<Item success style={{ borderBottomWidth:0,marginBottom:10,marginTop:20 ,width: "85%",marginLeft:'7.5%'}}>
      <TouchableOpacity onPress={()=>this.openCalendar()} style={{flexDirection:'row',width:'100%' }}>
      <Image source={require('../image/calendar-white.png')} style={{width:20,height:20,marginLeft:-10}}/>
      <Text style={{marginLeft:10,color:'white',fontSize:16}}> {new Date().toDateString()}</Text>
      <Calendar
        i18n="en"
        ref={(calendar) => {this.calendar = calendar;}}
        customI18n={customI18n}
        color='white'
        format="YYYYMMDD"
        minDate="20170510"
        maxDate="20180312"
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onConfirm={this.confirmDate}
      />
      </TouchableOpacity>
      </Item> */}

<View style={{flexDirection:'row',justifyContent:'center',marginVertical:20}}>
<DatePicker
        style={{width: '80%',color:'white'}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        color='white'
        format="YYYY-MM-DD"
        minDate={new Date()}
        maxDate="2050-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
            color:'white'
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
</View>
      <View style={{borderBottomColor:'white',marginTop:10,borderBottomWidth:0.6,width:'100%'}}/>

{/* <Item success style={{ width: "100%",borderBottomColor:'white' }}>
 <Image source={require('../image/searchs.png')} style={{width:20,height:20}}/>
                  <Input
                    value={this.state.from}
                    onChangeText={from => this.setState({ from })}
                    placeholder="Select Place"
                    placeholderTextColor="white"
                    style={{
                      color: "white",
                     borderBottomColor:'white',marginLeft:10
                    }}
                  />
                </Item> */}
                {/* <TouchableOpacity onPress={()=>navigate('SelectCar')}>
<Text style={{color:'white',fontSize:16,fontWeight:'500',marginTop:10,marginBottom:5,marginLeft:20}}>Cars</Text>
<Text style={{color:'white',fontSize:16,fontWeight:'500',marginVertical:10,marginLeft:20}}>Select Car</Text>
</TouchableOpacity>
<View style={{borderBottomColor:'white',borderBottomWidth:0.6,width:'100%'}}/> */}

</Card>
<View style={{marginBottom:10,marginTop:-5}}>
 <Button onPress={()=>navigate('BusCompanies')} style={{backgroundColor:'#9cdcfe',width:'96%',marginLeft:'2%',height:50,marginTop:5,justifyContent:'center'}}>
   <Text style={{color:'white',fontWeight:'500',fontSize:16}}>Next Step</Text>
 </Button>
</View>
</View>
</ScrollView>
</View>






</View>
</Drawer>

    );
  }
}

export default  BookBus;

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        backgroundColor: "#F5FCFF",
        justifyContent: "flex-start",
        height: 200
      },
      content1: {
        width: "100%",
        height: 50,
        marginBottom: 5,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center"
      },
      content2: {
        width: "100%",
        height: 100,
        marginTop: 10,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center"
      },
      contentText: { color: "#fff" },
      buttons: {
        zIndex: 1,
        height: 15,
        marginTop: -25,
        marginBottom: 0,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
      },
      buttonSelected: {
        opacity: 1,
        color: "red"
      },
      customSlide: {
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        height: 200
      },
      customImage: {
        width: "100%",
        height: "100%"
      }
});

