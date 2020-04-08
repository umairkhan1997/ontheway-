import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import { Icon ,Drawer, Item ,Header,Body,Card,Left,Right,Button,Picker,Input,} from 'native-base';
import BookDrawer from '../BookDrawer'
import ImageSlider from 'react-native-image-slider';
// import Calendar from 'react-native-calendar-select';

class BookHome extends React.Component {
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
    }
       openDrawer = () => {
        this.drawer._root.open();
      };
      closeDrawer = () => {
        this.drawer._root.close();
      };
     
      _incrementCount = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }));
      };
      _decrement = () => {
        if (this.state.count == 1) {
          alert("Can't go to below 1");
        } else {
          this.setState(prevState => ({ count: prevState.count - 1 }));
        }
      };
      _incrementCountC = () => {
        this.setState(prevState => ({ countC: prevState.countC + 1 }));
      };
      _decrementC = () => {
        if (this.state.countC == 1) {
          alert("Can't go to below 1");
        } else {
          this.setState(prevState => ({ countC: prevState.countC - 1 }));
        }
      };
      _incrementCountR = () => {
        this.setState(prevState => ({ countR: prevState.countR + 1 }));
      };
      _decrementR = () => {
        if (this.state.countR == 1) {
          alert("Can't go to below 1");
        } else {
          this.setState(prevState => ({ countR: prevState.countR - 1 }));
        }
      };
      Chechked=()=>{
        if(this.state.check==0){
          this.setState({
            check:1
          })
        }
        if(this.state.check==1){
          this.setState({
            check:0
          })
        }
      }
  render() {
    const { selectedItems } = this.state;

    const images = [
        'https://q-cf.bstatic.com/images/hotel/max1280x900/159/159317875.jpg',
        'https://q-cf.bstatic.com/images/hotel/max1280x900/159/159317873.jpg',
        'https://q-cf.bstatic.com/images/hotel/max1280x900/159/159317855.jpg',
        'https://q-cf.bstatic.com/images/hotel/max1280x900/157/157069424.jpg',
      ];
      
      
    const {navigate}=this.props.navigation;
    console.log(selectedItems,'hotel selected')
    console.log(this.state.startDate,this.state.endDate,'date selected')
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
<View  style={{flex:1}}  >

       {/* Header section */}
       <View style={{marginTop:0}}>
            <Header androidStatusBarColor='#213e4a' style={{ height:52,backgroundColor:'#213e4a' }}>
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
          <Text style={styles.contentText}>HOTEL VILLA</Text>
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
<Card style={{width:'96%',marginLeft:'2%'}}>
<Text style={{fontSize:16,fontWeight:'500',marginTop:20,marginLeft:10}}>Search</Text>
<Text style={{fontSize:16,fontWeight:'500',marginTop:20,
marginLeft:10}}>Name Your Destinations , So we can help you to find your Beautifull Place .</Text>

{/* PLACES NAME  */}
{/* <View style={{borderWidth:1,borderColor:'black',width:'98%',height:160,marginTop:10,marginLeft:'1%'}}> */}
 <View style={{width:'98%',marginTop:10,marginLeft:'1%'}}>
       <Item success style={{ width: "85%",marginLeft:'7.5%',marginBottom:10 }}>
       <Image source={require('../../image/searchs.png')} style={{width:20,height:20,marginLeft:-25}}/>
        <Input placeholder='City' 
           placeholderTextColor="black" style={{ marginLeft:10,  color: "black",
           borderBottomColor: "white",
           borderBottomWidth: 1}}/>
      </Item>
{/* CALENDER FOR DATE CHECK IN OUT */}

      <View style={{ marginBottom:10,marginTop:20 }}>
      <Item success style={{ marginBottom:10,marginTop:10 ,width: "85%",marginLeft:'7.5%'}}>
      <TouchableOpacity onPress={()=>navigate('CalenderPage')} style={{flexDirection:'row',width:'100%' }}>
      <Image source={require('../../image/calendar.png')} style={{width:20,height:20,marginLeft:-28}}/>
      <Text style={{marginLeft:10}}> {new Date().toDateString()}</Text>
   

      </TouchableOpacity>
      </Item>

      {/* PEOPLE TEXT */}
      <Item success style={{ width: "85%",marginLeft:'7.5%',marginBottom:20,marginTop:25 }}>
      <TouchableOpacity  onPress={()=>this.Chechked()}>
      <Image source={require('../../image/avatar.png')} style={{width:20,height:20,marginLeft:-28,marginBottom:-20}}/>
      <Text style={{marginLeft:10}}>{this.state.countR} Room , {this.state.count} person ,{this.state.countC} children</Text>   
      {/* <Button title="Show modal" onPress={this.toggleModal} style={{width:80,height:40}}/>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={this.toggleModal()} />
          </View>
        </Modal> */}
    
      </TouchableOpacity>
      </Item>
{this.state.check != 1 ?
      // {/* ADD PEOPLE */}
      <View style={{marginBottom:10}}>
      <View>
          <Item style={{flexDirection:'row',justifyContent:'space-between'}}>
           
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Image source={require('../../image/avatar.png')} style={{marginHorizontal:10,width:20,height:20}}/>
            <Text>Persons</Text>
            </View>
            
            <View style={{ flexDirection: "row", marginRight: 10 }}>
                          <View>
                            <TouchableOpacity onPress={() => this._decrement()}>
                              <Text
                                style={{
                                  marginLeft: 10,
                                  fontSize: 20,
                                  borderWidth: 1,
                                  width: 30,
                                  textAlign: "center",
                                  borderColor: "white",
                                  color: "white",
                                  backgroundColor: "#213e4a"
                                }}
                              >
                                -
                              </Text>
                            </TouchableOpacity>
                          </View>
                          <Text
                            style={{
                              fontSize: 20,
                              // borderWidth: 1,
                              width: 30,
                              textAlign: "center",
                              color: "black",
                              // borderColor: "white"
                            }}
                          >
                            {this.state.count}
                          </Text>
                          <View>
                            <TouchableOpacity
                              onPress={() => this._incrementCount()}
                            >
                              <Text
                                style={{
                                  fontSize: 20,
                                  borderWidth: 1,
                                  width: 30,
                                  textAlign: "center",
                                  borderColor: "white",
                                  backgroundColor: "#213e4a",
                                  color: "white"
                                }}
                              >
                                +
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
           
          </Item>
        </View>
 {/* ADD PEOPLE END */}

  {/* ADD CHILD */}
 <View style={{marginTop:15}}>
          <Item style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>

            <Image source={require('../../image/children.png')} style={{marginHorizontal:10,width:20,height:20}}/>
            <Text>Children</Text>
          </View>
            
            <View style={{ flexDirection: "row", marginRight: 10 }}>
                          <View>
                            <TouchableOpacity onPress={() => this._decrementC()}>
                              <Text
                                style={{
                                  marginLeft: 10,
                                  fontSize: 20,
                                  borderWidth: 1,
                                  width: 30,
                                  textAlign: "center",
                                  borderColor: "white",
                                  color: "white",
                                  backgroundColor: "#213e4a"
                                }}
                              >
                                -
                              </Text>
                            </TouchableOpacity>
                          </View>
                          <Text
                            style={{
                              fontSize: 20,
                             // fontWeight:'500',
                              // borderWidth: 1,
                              width: 30,
                              textAlign: "center",
                              color: "black",
                              // borderColor: "white"
                            }}
                          >
                            {this.state.countC}
                          </Text>
                          <View>
                            <TouchableOpacity
                              onPress={() => this._incrementCountC()}
                            >
                              <Text
                                style={{
                                  fontSize: 20,
                                  borderWidth: 1,
                                  width: 30,
                                  textAlign: "center",
                                  borderColor: "white",
                                  backgroundColor: "#213e4a",
                                  color: "white"
                                }}
                              >
                                +
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
           
          </Item>
        </View>
 {/* ADD CHILD END */}

  {/* ADD Room */}
 <View style={{marginTop:15}}>
          <Item style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>

            <Image source={require('../../image/children.png')} style={{marginHorizontal:10,width:20,height:20}}/>
            <Text>Room</Text>
          </View>
            
            <View style={{ flexDirection: "row", marginRight: 10 }}>
                          <View>
                            <TouchableOpacity onPress={() => this._decrementR()}>
                              <Text
                                style={{
                                  marginLeft: 10,
                                  fontSize: 20,
                                  borderWidth: 1,
                                  width: 30,
                                  textAlign: "center",
                                  borderColor: "white",
                                  color: "white",
                                  backgroundColor: "#213e4a"
                                }}
                              >
                                -
                              </Text>
                            </TouchableOpacity>
                          </View>
                          <Text
                            style={{
                              fontSize: 20,
                             // fontWeight:'500',
                              // borderWidth: 1,
                              width: 30,
                              textAlign: "center",
                              color: "black",
                              // borderColor: "white"
                            }}
                          >
                            {this.state.countR}
                          </Text>
                          <View>
                            <TouchableOpacity
                              onPress={() => this._incrementCountR()}
                            >
                              <Text
                                style={{
                                  fontSize: 20,
                                  borderWidth: 1,
                                  width: 30,
                                  textAlign: "center",
                                  borderColor: "white",
                                  backgroundColor: "#213e4a",
                                  color: "white"
                                }}
                              >
                                +
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
           
          </Item>
        </View>
        </View>
          : null }
 {/* ADD Room END */}
      </View>


</View>

{/* CHECK IN DATES */}
</Card>
<View style={{marginBottom:10}}>
 <Button onPress={()=>navigate('HotelSelection')} style={{backgroundColor:'#9cdcfe',width:'96%',marginLeft:'2%',height:50,marginTop:5,justifyContent:'center'}}>
   <Text style={{color:'white',fontWeight:'500',fontSize:16}}>Next Step</Text>
 </Button>
</View>
</View>

</ScrollView>
</View>
  {/* Footer section */}
 


</View>
</Drawer>

    );
  }
}

export default  BookHome;

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
        marginBottom: 10,
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
