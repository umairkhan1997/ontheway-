import React from 'react';
import { View, StyleSheet, ScrollView,Image,Dimensions,ImageBackground,Text } from 'react-native';
import { Icon ,Drawer, Item ,Body,Card,Left,Right,Button,Picker,Input,Toast, Root} from 'native-base';
import { Header } from 'react-native-elements';
import CalendarPicker from 'react-native-calendar-picker';
class CalenderPage extends React.Component {
//   static navigationOptions = {
//     header: null
//   }

  constructor(props) {
    super(props)
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);  }

    onDateChange(date, type) {
      if (type === 'END_DATE') {
        this.setState({
          selectedEndDate: date,
        });
      } else {
        this.setState({
          selectedStartDate: date,
          selectedEndDate: null,
        });
      }
    }

  render() {
    console.log(this.state.selectedStartDate, this.state.selectedEndDate,'startDate, endDate, focusedInput');
    const { selectedStartDate, selectedEndDate } = this.state;
    const minDate = new Date(); // Today
    const maxDate = new Date(3000, 6, 3);
    const startDate  =  selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';
 
    return (
      <View style={styles.container}>
      <Header
       containerStyle={{
        backgroundColor: '#213d48',
        height:Platform.OS==='ios'?85:60
      }}
// leftComponent={{ text: 'Other', style: { width:'200%',color: '#fff',fontSize:18,marginBottom:10,fontWeight:'bold' } }}
rightComponent={ <Button onPress={()=>this.props.navigation.navigate('BookCar')}  style={{backgroundColor: '#213d48',marginBottom:10,color:"#fff",width:60}}>
  <Text style={{color:"#fff",fontSize:18,fontWeight:'bold'}}>Done</Text></Button> }
/>
    <View style={{ flex: 1}}>
    <ScrollView showsVerticalScrollIndicator={false}>

<CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          todayBackgroundColor="#f2e6ff"
          selectedDayColor="#7300e6"
          selectedDayTextColor="#FFFFFF"
          onDateChange={this.onDateChange}
        />
 
        <View>
          <Text>SELECTED START DATE:{ startDate }</Text>
          <Text>SELECTED END DATE:{ endDate }</Text>
        </View>

    </ScrollView>
    </View>
    </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
   
  },
  date: {
    marginTop: 50
  },
  focused: {
    color: 'blue'
  }
});

export default CalenderPage;