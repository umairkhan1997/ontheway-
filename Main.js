import React, { Component } from 'react';
import MainNavi from './Navigation'
import Splash from './screens/Splash'
class Main extends Component {
    constructor(props) {
        super(props)
        this.state = { currentScreen: 'Splash' };
        console.log('Start doing some tasks for about 3 seconds')
        setTimeout(()=>{
            console.log('Done some tasks for about 3 seconds')
            this.setState({ currentScreen: 'Login' })
        }, 3000)
    }
  
    render() {
        
          //  <AppNavigator />

            const { currentScreen } = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash /> : <MainNavi />
        return mainScreen
        
    }

}

export default Main;