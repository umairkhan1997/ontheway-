import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity,FlatList} from 'react-native';
import { Icon ,Drawer,Input, Item ,Header,Body,Card,Left,Right,Button,Picker} from 'native-base';
import BookDrawer from '../BookDrawer'
import ImageSlider from 'react-native-image-slider';
import Calendar from 'react-native-calendar-select';

class BookCar extends React.Component {
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

        }
        this.backPressSubscriptions = new Set();
        this.confirmDate = this.confirmDate.bind(this);
        this.openCalendar = this.openCalendar.bind(this);
    } 

    confirmDate({startDate, endDate, startMoment, endMoment}) {
        this.setState({
          startDate,
          endDate
        });
      }
      openCalendar() {
        this.calendar && this.calendar.open();
      }
      toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
      };
    _onPress = () => {
      this.props.onPressItem(this.props.id);
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
    
  render() {
    const images = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0iOfGVNGM802ddL3Y8nCMTxGwEiwjKWlVFSSgm5eX796Hrr2C',
        'https://images.hgmsites.net/hug/honda-civic-sdn_100547439_h.jpg',
        'https://i.pinimg.com/originals/26/8d/ae/268dae73ff2e14d63941a2673ae5b960.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU-v3wtg8jURfGCSizcOzpqZXmFWkp8X3QLE-2FLd2OT3jZ_Ri'
        
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
<Card style={{width:'100%',height:260,marginTop:-5,backgroundColor:'#213e4a'}}>
<TouchableOpacity onPress={()=>navigate('SelectPlace')}>
<Text style={{color:'white',fontSize:16,fontWeight:'500',marginTop:10,marginBottom:5,marginLeft:20}}>From</Text>
<Text style={{color:'white',fontSize:16,fontWeight:'500',marginVertical:10,marginLeft:20}}>Select Place</Text>
</TouchableOpacity>
<View style={{borderBottomColor:'white',borderBottomWidth:0.6,width:'100%'}}/>

<Item success style={{ borderBottomWidth:0,marginBottom:10,marginTop:20 ,width: "85%",marginLeft:'7.5%'}}>
      <TouchableOpacity onPress={()=>this.openCalendar()} style={{flexDirection:'row',width:'100%' }}>
      <Image source={require('../../image/calendar-white.png')} style={{width:20,height:20,marginLeft:-10}}/>
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
      </Item>
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
                <TouchableOpacity onPress={()=>navigate('SelectCar')}>
<Text style={{color:'white',fontSize:16,fontWeight:'500',marginTop:10,marginBottom:5,marginLeft:20}}>Cars</Text>
<Text style={{color:'white',fontSize:16,fontWeight:'500',marginVertical:10,marginLeft:20}}>Select Car</Text>
</TouchableOpacity>
<View style={{borderBottomColor:'white',borderBottomWidth:0.6,width:'100%'}}/>

</Card>
<View style={{marginBottom:10,marginTop:-5}}>
 <Button onPress={()=>navigate('Companies')} style={{backgroundColor:'#9cdcfe',width:'96%',marginLeft:'2%',height:50,marginTop:5,justifyContent:'center'}}>
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

export default  BookCar;

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

