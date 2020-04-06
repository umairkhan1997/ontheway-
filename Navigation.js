import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,Image, Platform
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Iconss } from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icons from 'react-native-vector-icons/FontAwesome';


// ICONS IMPORTS 
// import iconActivity from "./images/pulseblue.png"
// import iconActivitys from './images/pulse.png'

// IMPORT HOTEL
import BookHome from './screens/Hotel/BookHome'
import HotelSelection from './screens/Hotel/HotelSelection'
import HotelPage from './screens/Hotel/HotelPage'
import ChooseYourStay from './screens/Hotel/ChooseYourStay'
import FillInfo from './screens/Hotel/FillInfo'
import BookingOverview from './screens/Hotel/BookingOverview'

// IMORT TRAIN
import BookTrain from './screens/Train/BookTrain'
import BookingTrain from './screens/Train/BookingTrain'
import SelectTo from './screens/Train/SelectTo'
import SelectFrom from './screens/Train/SelectFrom'
import DetailUser from './screens/Train/DetailUser'
import StopList from './screens/Train/StopList'
import TrainStation from './screens/Train/TrainStation'


// IMPORT BUS 
import BookBus from './screens/Bus/BookBus'
import BusCompanies from './screens/Bus/BusCompanies'
import BusCompanyPage from './screens/Bus/BusCompanyPage'

// IMPORT CAR
import BookCar from './screens/Car/BookCar'
import SelectCar from './screens/Car/SelectCar'
import Companies from './screens/Car/Companies'
import CompanyPage from './screens/Car/CompanyPage'
import SelectPlace from './screens/Car/SelectPlace'

// IMPORT MAKE TOUR
import MakeTourOption from './screens/MakeTour/MakeTourOption'

// IMPORT LocalTraStack
import SelectLT from './screens/MakeTour/Ltoption/SelectLT'
import SelectYourTour from './screens/MakeTour/Ltoption/SelectYourTour'
import TourDetail from './screens/MakeTour/Ltoption/TourDetail'


import StartPage from './screens/StartPage'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();






function HotelStack() {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="BookHome" component={BookHome} />
        <Stack.Screen name="HotelSelection" component={HotelSelection} />
        <Stack.Screen name="HotelPage" component={HotelPage} />
        <Stack.Screen name="ChooseYourStay" component={ChooseYourStay} />
        <Stack.Screen name="FillInfo" component={FillInfo} />
        <Stack.Screen name="BookingOverview" component={BookingOverview} />
        
      </Stack.Navigator>
  );
};

function TrainStack() {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="BookTrain" component={BookTrain} />
        <Stack.Screen name="BookingTrain" component={BookingTrain} />
        <Stack.Screen name="SelectFrom" component={SelectFrom} />
        <Stack.Screen name="SelectTo" component={SelectTo} />
        <Stack.Screen name="TrainStation" component={TrainStation} />
        <Stack.Screen name="StopList" component={StopList} />
        <Stack.Screen name="DetailUser" component={DetailUser} />

      </Stack.Navigator>
  );
};
function BusStack() {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="BookBus" component={BookBus} />
        <Stack.Screen name="BusCompanies" component={BusCompanies} />
        <Stack.Screen name="BusCompanyPage" component={BusCompanyPage} />
      </Stack.Navigator>
  );
};

function CarStack() {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="BookCar" component={BookCar} />
        <Stack.Screen name="SelectPlace" component={SelectPlace} />
        <Stack.Screen name="SelectCar" component={SelectCar} />
        <Stack.Screen name="CompanyPage" component={CompanyPage} />
        <Stack.Screen name="Companies" component={Companies} />
      </Stack.Navigator>
  );
};

function LocalTraStack() {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SelectLT" component={SelectLT} />
        <Stack.Screen name="SelectYourTour" component={SelectYourTour} />
        <Stack.Screen name="TourDetail" component={TourDetail} />
      </Stack.Navigator>
  );
};

function makeTourStack() {
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="MakeTourOption" component={MakeTourOption} />
        <Stack.Screen name="LocalTraStack" component={LocalTraStack} />
      </Stack.Navigator>
  );
};




function MainTab() {
  return (
    <Tab.Navigator
    initialRouteName="HotelStack"
   tabBarOptions={
{
style: {
  backgroundColor: "white",
  height:Platform.OS==='ios'?90: 50,
},
labelStyle:{
  fontSize: 13,
  marginBottom:1,
  fontWeight:'bold'
},
activeTintColor: 'black',
showIcon: true,
}
   }
    style={{ backgroundColor: 'white' }}

        //    screenOptions={({ route }) => ({
        //    tabBarIcon: ({ focused, color, size }) => {
        //      let iconName;

        //      if (route.name === 'Activity') {
        //        iconName = focused
        //          ? iconActivity
        //          : iconActivitys
        //      } 

        //      // You can return any component that you like here!
        //      return <Image style={{width:20,height:20,marginTop:5}} source={iconName} />;
        //    },
        //  })}    
>
  
        <Tab.Screen name="Hotel" component={HotelStack} />
        <Tab.Screen name="Train" component={TrainStack} />
        <Tab.Screen name="Bus" component={BusStack} />
        <Tab.Screen name="Car" component={CarStack} />
       
      </Tab.Navigator>
    
  );
}


function MainNavi() {
  return (
       <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="StartPage" component={StartPage}/>  
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="makeTourStack" component={makeTourStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default MainNavi;