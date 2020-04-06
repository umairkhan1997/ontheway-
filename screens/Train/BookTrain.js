import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,SafeAreaView,Image,TextInput ,
    ImageBackground,Dimensions,KeyboardAvoidingView,ScrollView,TouchableOpacity,FlatList} from 'react-native';
import { Icon ,Drawer, Item ,Header,Body,Card,Left,Right,Button,Picker} from 'native-base';
import BookDrawer from '../BookDrawer'
import ImageSlider from 'react-native-image-slider';

class BookTrain extends React.Component {
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
         
          
        }
        this.backPressSubscriptions = new Set()
    } 
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
        'https://nation.com.pk/digital_images/large/2018-10-14/pakistan-railways-to-introduce-10-new-trains-by-end-of-2018-1539507178-2281.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnCI4PgInTRHDRHpxA5QiqjRPIZZwoROyBVuHbJIUXYCzk_jQ',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL91PyMRMI71yE1Jm-dUtQ0G8Ch_odGG7suwbvV_wNfbvM2Q32cA',
        'data:image/jpeg;base64,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',
      ];
    const {navigate}=this.props.navigation;
    const textColor = this.props.selected ? 'red' : 'black';
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
            <Header style={{ height:52,backgroundColor:'#213e4a' }} androidStatusBarColor='#213e4a'>
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
          <Text style={styles.contentText}>TRAINS</Text>
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


<Card style={{marginTop:-5,width:'100%',height:400,backgroundColor:'#213e4a',flexDirection:'row',flexWrap:'wrap'}}>
<View style={{width:'32%',marginTop:20}}>
<TouchableOpacity onPress={()=>navigate('BookingTrain')}>
<View style={{flexDirection:'row',justifyContent:'center'}}>
  <Image source={require('../../image/train-front.png')} style={{width:30,height:30}}/>
</View>
</TouchableOpacity>
  <Text style={{textAlign:'center',fontSize:16,fontWeight:'500',color:'white',marginTop:5}}>Booking</Text>
</View>
<View style={{width:'32%',marginTop:20}}>
<View style={{flexDirection:'row',justifyContent:'center'}}>
  <Image source={require('../../image/calendar-white.png')} style={{width:30,height:30}}/>
  </View>
  <Text style={{textAlign:'center',fontSize:16,fontWeight:'500',color:'white',marginTop:5}}>Timing</Text>
</View>
<View style={{width:'32%',marginTop:20}}>
<View style={{flexDirection:'row',justifyContent:'center'}}>
  <Image source={require('../../image/man-user.png')} style={{width:30,height:30}}/>
</View>
  <Text style={{textAlign:'center',fontSize:16,fontWeight:'500',color:'white',marginTop:5}}>Profile</Text>
</View>
</Card>

</ScrollView>
</View>





</View>
</Drawer>

    );
  }
}

export default  BookTrain;

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


export class MultiSelectList extends React.PureComponent {
  state = {selected: (new Map())};

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
  };

  _renderItem = ({item}) => (
    <MyListItem
      id={item.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      title={item.title}
    />
  );

  render() {
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}