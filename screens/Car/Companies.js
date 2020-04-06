import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Icon ,Drawer, Item ,Header,Body,Card,Left,Right,Button,Picker,Input,} from 'native-base';
import StarRating from 'react-native-star-rating';

class Companies extends React.Component {
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
          selectedItems : [],
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
    onSelectedItemsChange = selectedItems => {
      this.setState({ selectedItems });
    };
   
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
        const { selectedItems } = this.state;
        return (
            <View  style={{flex:1}}>

<View style={{marginTop:0}}>
            <Header style={{ height:52,backgroundColor:'#213e4a' }}>
          <Left >
          <TouchableOpacity onPress={()=>navigate('BookCar')}>

<Image source={require('../../image/left-arrow.png')} style={{width:20,height:20}}/>
</TouchableOpacity>
            </Left>
            <View style={{marginLeft:'20%'}}>
    <Text style={{fontSize:20,fontWeight:'500',marginTop:15,color:'white'}}>Companies</Text>
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
    <TouchableOpacity onPress={()=>navigate('CompanyPage')}>

    <Card style={{width:'100%',height:200,flexDirection:'row',justifyContent:'space-between'}}> 
<View style={{width:'50%'}}>
    <Image source={{uri:'data:image/jpeg;base64,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'}} style={{width:'95%',height:190,marginVertical:5,marginHorizontal:5,borderWidth:0.4,borderColor:'gray'}}/>
</View>
<View style={{width:'50%',}}>
  <Text style={{fontSize:14,fontWeight:'500',marginLeft:5,letterSpacing:5,textDecorationLine:'underline'}}>Car Planet </Text>
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
<Image source={require('../../image/place.png')} style={{width:20,height:20}}/>
<Text>Karachi , Pakistan</Text>
        </View>
        {/* ROOM           */}
{/* <View style={{marginTop:5}}>
  <Text></Text>
</View> */}
{/* RUPESS */}
<View style={{marginTop:5}}>
  <Text>1 Day Rent <Text style={{fontSize:16,fontWeight:'500'}}> PKR. 5000 </Text>For Civic</Text>
</View>
{/* TAX RUPESS */}
<View style={{marginTop:5}}>
  <Text>PKR. 2000 taxes and charges</Text>
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
        </TouchableOpacity>
{/* second hotel  */}

<Card style={{width:'100%',height:200,flexDirection:'row',justifyContent:'space-between'}}> 
<View style={{width:'50%'}}>
    <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsmPnv5khZGAB1QjtHYaJ9zdgBLosD8bjrRBedqaIksc61LssS'}} style={{width:'95%',height:190,marginVertical:5,marginHorizontal:5,borderWidth:0.4,borderColor:'gray'}}/>
</View>
<View style={{width:'50%',}}>
  <Text style={{fontSize:14,fontWeight:'500',marginLeft:5,letterSpacing:5,textDecorationLine:'underline'}}>Auto Darbar</Text>
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
<Image source={require('../../image/place.png')} style={{width:20,height:20}}/>
<Text>Karachi , Pakistan</Text>
        </View>
        {/* ROOM           */}
{/* <View style={{marginTop:5}}>
  <Text></Text>
</View> */}
{/* RUPESS */}
<View style={{marginTop:5}}>
  <Text>1 Day Rent <Text style={{fontSize:16,fontWeight:'500'}}> PKR. 5000 </Text>For Civic</Text>
</View>
{/* TAX RUPESS */}
<View style={{marginTop:5}}>
  <Text>PKR. 2000 taxes and charges</Text>
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
    <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOBuvYTuNSt46c7OJ_xnZSOSSOgsjoE8bx1BY-xLr4xyIZ5d7s'}} style={{width:'95%',height:190,marginVertical:5,marginHorizontal:5,borderWidth:0.4,borderColor:'gray'}}/>
</View>
<View style={{width:'50%',}}>
  <Text style={{fontSize:14,fontWeight:'500',marginLeft:5,letterSpacing:5}}>Smart Cars</Text>
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
<Image source={require('../../image/place.png')} style={{width:20,height:20}}/>
<Text>Karachi , Pakistan</Text>
        </View>
        {/* ROOM           */}
{/* <View style={{marginTop:5}}>
  <Text></Text>
</View> */}
{/* RUPESS */}
<View style={{marginTop:5}}>
  <Text>1 Day Rent <Text style={{fontSize:16,fontWeight:'500'}}> PKR. 5000 </Text>For Civic</Text>
</View>
{/* TAX RUPESS */}
<View style={{marginTop:5}}>
  <Text>PKR. 2000 taxes and charges</Text>
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
    <Image source={{uri:'data:image/jpeg;base64,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'}} style={{width:'95%',height:190,marginVertical:5,marginHorizontal:5,borderWidth:0.4,borderColor:'gray'}}/>
</View>
<View style={{width:'50%',}}>
  <Text style={{fontSize:14,fontWeight:'500',marginLeft:5,letterSpacing:5}}>Car Planet </Text>
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
<Image source={require('../../image/place.png')} style={{width:20,height:20}}/>
<Text>Karachi , Pakistan</Text>
        </View>
        {/* ROOM           */}
{/* <View style={{marginTop:5}}>
  <Text></Text>
</View> */}
{/* RUPESS */}
<View style={{marginTop:5}}>
  <Text>1 Day Rent <Text style={{fontSize:16,fontWeight:'500'}}> PKR. 5000 </Text>For Civic</Text>
</View>
{/* TAX RUPESS */}
<View style={{marginTop:5}}>
  <Text>PKR. 2000 taxes and charges</Text>
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

export default  Companies;
