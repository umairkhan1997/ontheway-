import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Icon ,Drawer, Item ,Header,Body,Card,Left,Right,Button,Picker,Input,} from 'native-base';
import StarRating from 'react-native-star-rating';

class ChangeHotelDi extends React.Component {
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
          // selectedItems : [],
          startDate: new Date().toDateString(),  
    endDate: new Date().toDateString(),
    count: 1,
    countC: 1,
    isModalVisible: false,
    countR:1,
    check:0
        }
        this.confirmDate = this.confirmDate.bind(this);
        this.openCalendar = this.openCalendar.bind(this);
        
        this.backPressSubscriptions = new Set();
        this.items = [{
          id: 'Hotel 1',
          name: 'Hotel 1',
        }, {
          id: 'Hotel 2',
          name: 'Hotel 2',
        }, {
          id: 'Hotel 3',
          name: 'Hotel 3',
        }, {
          id: 'Hotel 4',
          name: 'Hotel 4',
        }, {
          id: 'Hotel 5',
          name: 'Hotel 5',
        },  {
          id: 'Hotel 6',
          name: 'Hotel 6',
        }];
    }
    // onSelectedItemsChange = selectedItems => {
    //   this.setState({ selectedItems });
    // };
   
    confirmDate({startDate, endDate, startMoment, endMoment}) {
        this.setState({
          startDate,
          endDate
        });
      }
      openCalendar() {
        this.calendar && this.calendar.open();
      }
      onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
      }
    render() {
        let color = {
            subColor: '#f0f0f0'
          };
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
        const {navigate}=this.props.navigation;
        // const { selectedItems } = this.state;
        return (
            <View  style={{flex:1}}>

<View style={{marginTop:0}}>
            <Header style={{ height:52,backgroundColor:'#213e4a' }}>
          <Left >
          <TouchableOpacity onPress={()=>navigate('SelectHotelsDi')}>

<Image source={require('../../../../image/left-arrow.png')} style={{width:20,height:20}}/>
</TouchableOpacity>
            </Left>
            <View style={{marginLeft:'20%'}}>
    <Text style={{fontSize:20,fontWeight:'500',marginTop:15,color:'white'}}>On The Way</Text>
</View>
<Right>
{/* <Image /> */}
                </Right>
            </Header>
            </View>
            <View style={{flex:1,justifyContent:'center',backgroundColor:'#dfdfdf'}}>
            <KeyboardAvoidingView behavior="padding" enabled>

<ScrollView>
<View>

  {/* FIRST CITY */}
    {/* <Card style={{width:'98%',height:280,marginLeft:'1%'}}>
<Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:10}}>Your City : Karachi</Text>
<Text style={{fontSize:16,fontWeight:'500',marginLeft:10,marginTop:10}}>Select Check In and Check out time</Text>
<Item success style={{ marginBottom:10,marginTop:10 ,width: "80%",marginLeft:'10%'}}>
      <TouchableOpacity onPress={()=>this.openCalendar()} style={{flexDirection:'row',width:'100%' }}>
      <Image source={require('../image/calendar.png')} style={{width:20,height:20,marginLeft:-28}}/>
      <Text style={{marginLeft:10}}> {new Date().toDateString()}</Text>
      <Calendar
        i18n="en"
        ref={(calendar) => {this.calendar = calendar;}}
        customI18n={customI18n}
        color={color}
        format="YYYYMMDD"
        minDate="20170510"
        maxDate="20180312"
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onConfirm={this.confirmDate}
      />
      </TouchableOpacity>
      </Item>   
      SLECT HOTEL NAME
      <View style={{ height:100,marginTop:20 }}>
         <MultiSelect
           hideTags
           items={this.items}
           uniqueKey="id"
           ref={(component) => { this.multiSelect = component }}
           onSelectedItemsChange={this.onSelectedItemsChange}
           selectedItems={selectedItems}
           selectText="Select Your Hotel here"
           searchInputPlaceholderText="Search Items..."
           onChangeInput={ (text)=> console.log(text)}
          altFontFamily="ProximaNova-Light"
           tagRemoveIconColor="#CCC"
           tagBorderColor="#CCC"
           tagTextColor="#CCC"
           selectedItemTextColor="#CCC"
           selectedItemIconColor="#CCC"
           itemTextColor="#000"
           displayKey="name"
           searchInputStyle={{ color: '#CCC' }}
           submitButtonColor="#CCC"
           submitButtonText="Submit"
         />
        
        <View style={{flexDirection:'row',flexWrap:'wrap'}}>
           {
             this.state.selectedItems &&
             this.state.selectedItems.map(data =>{
               console.log(data,)
return(

<View style={{width:'32%'}}>
    <Text style={{fontSize:16,fontWeight:'500',color:'gray',marginLeft:'1%'}}>{data}</Text>
    
</View>
)
             })
           }
       </View>
       </View>
    </Card> */}
    {/* HOTEL ARRAY */}
    {/* <TouchableOpacity onPress={()=>navigate('HotelPage')}> */}

    <Card style={{width:'100%',height:200,flexDirection:'row',justifyContent:'space-between'}}> 
<View style={{width:'50%'}}>
    <Image source={require('../../../../image/banner2.jpg')} style={{width:'95%',height:190,marginVertical:5,marginHorizontal:5,borderWidth:0.4,borderColor:'gray'}}/>
</View>
<View style={{width:'50%',}}>
  <Text>Hotel Villa </Text>
  {/* STARS  */}
  <View style={{width:'40%',marginTop:5}}>
  <StarRating
        disabled={false}
        maxStars={5}
        starSize={10}
        fullStarColor='gold'
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        />
        </View>
        {/* LOCATION */}
        <View style={{flexDirection:'row',marginTop:5}}>
<Image source={require('../../../../image/place.png')} style={{width:20,height:20}}/>
<Text> Gilgit Baltistan , Pakistan</Text>
        </View>
        {/* ROOM           */}
<View style={{marginTop:5}}>
  <Text>2 x Standard Triple Room</Text>
</View>
{/* RUPESS */}
<View style={{marginTop:5}}>
  <Text>1 night stay <Text style={{fontSize:16,fontWeight:'500'}}>PKR. 37,500</Text></Text>
</View>
{/* TAX RUPESS */}
<View style={{marginTop:5}}>
  <Text>PKR. 10,000 taxes and charges</Text>
</View>
{/* CANCEllation */}
<View style={{marginTop:5,flexDirection:'row',justifyContent:'flex-end',marginRight:10}}>
  <Text>Free Cancellation</Text>
</View>
{/* CANCEllation */}
<View style={{marginTop:5,flexDirection:'row',justifyContent:'flex-end',marginRight:10}}>
  <Text>No Prepayment</Text>
</View>
</View>
    </Card>
        {/* </TouchableOpacity> */}
{/* second hotel  */}

<Card style={{width:'100%',height:200,flexDirection:'row',justifyContent:'space-between'}}> 
<View style={{width:'50%'}}>
    <Image source={require('../../../../image/banner2.jpg')} style={{width:'95%',height:190,marginVertical:5,marginHorizontal:5,borderWidth:0.4,borderColor:'gray'}}/>
</View>
<View style={{width:'50%',}}>
  <Text>Hotel Villa </Text>
  {/* STARS  */}
  <View style={{width:'40%',marginTop:5}}>
  <StarRating
        disabled={false}
        maxStars={5}
        starSize={10}
        fullStarColor='gold'
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        />
        </View>
        {/* LOCATION */}
        <View style={{flexDirection:'row',marginTop:5}}>
<Image source={require('../../../../image/place.png')} style={{width:20,height:20}}/>
<Text> Gilgit Baltistan , Pakistan</Text>
        </View>
        {/* ROOM           */}
<View style={{marginTop:5}}>
  <Text>2 x Standard Triple Room</Text>
</View>
{/* RUPESS */}
<View style={{marginTop:5}}>
  <Text>1 night stay <Text style={{fontSize:16,fontWeight:'500'}}>PKR. 37,500</Text></Text>
</View>
{/* TAX RUPESS */}
<View style={{marginTop:5}}>
  <Text>PKR. 10,000 taxes and charges</Text>
</View>
{/* CANCEllation */}
<View style={{marginTop:5,flexDirection:'row',justifyContent:'flex-end',marginRight:10}}>
  <Text>Free Cancellation</Text>
</View>
{/* CANCEllation */}
<View style={{marginTop:5,flexDirection:'row',justifyContent:'flex-end',marginRight:10}}>
  <Text>No Prepayment</Text>
</View>
</View>
    </Card>

{/* 3 hotel  */}
 <Card style={{width:'100%',height:200,flexDirection:'row',justifyContent:'space-between'}}> 
<View style={{width:'50%'}}>
    <Image source={require('../../../../image/banner2.jpg')} style={{width:'95%',height:190,marginVertical:5,marginHorizontal:5,borderWidth:0.4,borderColor:'gray'}}/>
</View>
<View style={{width:'50%',}}>
  <Text>Hotel Villa </Text>
  {/* STARS  */}
  <View style={{width:'40%',marginTop:5}}>
  <StarRating
        disabled={false}
        maxStars={5}
        starSize={10}
        fullStarColor='gold'
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        />
        </View>
        {/* LOCATION */}
        <View style={{flexDirection:'row',marginTop:5}}>
<Image source={require('../../../../image/place.png')} style={{width:20,height:20}}/>
<Text> Gilgit Baltistan , Pakistan</Text>
        </View>
        {/* ROOM           */}
<View style={{marginTop:5}}>
  <Text>2 x Standard Triple Room</Text>
</View>
{/* RUPESS */}
<View style={{marginTop:5}}>
  <Text>1 night stay <Text style={{fontSize:16,fontWeight:'500'}}>PKR. 37,500</Text></Text>
</View>
{/* TAX RUPESS */}
<View style={{marginTop:5}}>
  <Text>PKR. 10,000 taxes and charges</Text>
</View>
{/* CANCEllation */}
<View style={{marginTop:5,flexDirection:'row',justifyContent:'flex-end',marginRight:10}}>
  <Text>Free Cancellation</Text>
</View>
{/* CANCEllation */}
<View style={{marginTop:5,flexDirection:'row',justifyContent:'flex-end',marginRight:10}}>
  <Text>No Prepayment</Text>
</View>
</View>
    </Card>


    <Card style={{width:'100%',height:200,flexDirection:'row',justifyContent:'space-between'}}> 
<View style={{width:'50%'}}>
    <Image source={require('../../../../image/banner2.jpg')} style={{width:'95%',height:190,marginVertical:5,marginHorizontal:5,borderWidth:0.4,borderColor:'gray'}}/>
</View>
<View style={{width:'50%',}}>
  <Text>Hotel Villa </Text>
  {/* STARS  */}
  <View style={{width:'40%',marginTop:5}}>
  <StarRating
        disabled={false}
        maxStars={5}
        starSize={10}
        fullStarColor='gold'
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        />
        </View>
        {/* LOCATION */}
        <View style={{flexDirection:'row',marginTop:5}}>
<Image source={require('../../../../image/place.png')} style={{width:20,height:20}}/>
<Text> Gilgit Baltistan , Pakistan</Text>
        </View>
        {/* ROOM           */}
<View style={{marginTop:5}}>
  <Text>2 x Standard Triple Room</Text>
</View>
{/* RUPESS */}
<View style={{marginTop:5}}>
  <Text>1 night stay <Text style={{fontSize:16,fontWeight:'500'}}>PKR. 37,500</Text></Text>
</View>
{/* TAX RUPESS */}
<View style={{marginTop:5}}>
  <Text>PKR. 10,000 taxes and charges</Text>
</View>
{/* CANCEllation */}
<View style={{marginTop:5,flexDirection:'row',justifyContent:'flex-end',marginRight:10}}>
  <Text>Free Cancellation</Text>
</View>
{/* CANCEllation */}
<View style={{marginTop:5,flexDirection:'row',justifyContent:'flex-end',marginRight:10}}>
  <Text>No Prepayment</Text>
</View>
</View>
    </Card>
</View>
</ScrollView>
</KeyboardAvoidingView>
</View>
</View>
 );
}
}

export default  ChangeHotelDi;
