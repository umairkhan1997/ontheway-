import React from 'react';
import { View, StyleSheet, ScrollView,Image,Dimensions,ImageBackground } from 'react-native';


class Splash extends React.Component {
//   static navigationOptions = {
//     header: null
//   }

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <View >
          <View style={{width:'100%',height:'100%'}}>
      < Image source={require('../image/Capture.png')}   
       style={{ width: "100%", height: "100%" }} >

      </Image>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // marginTop: 22,
  //  backgroundColor:'#008BEF',
    // alignItems:'center',
    // justifyContent:'center'
  },
});

export default Splash;