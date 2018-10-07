/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, Worldljs!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

// Import a library to help create a Component
import React, {Component} from 'react';
import { View } from 'react-native';
import Header from './src/components/common/Header';
import CardList from './src/components/CardList';
import { createStackNavigator } from 'react-navigation';
import Button from './src/components/common/Button';

// create a Component

export class HomeScreen extends Component {

  render() {
    return (

      <View style = {{flex:1}}>

      <Header headerText={'Buzzoek!'}/> // component nesting

      <Button onPress = {() => this.props.navigation.navigate('Home')}>
        Login form will go here </Button>

      <Button onPress = {() => this.props.navigation.navigate('Scan')}>
        Skip to Scanning </Button>

      </View>
    );
  }
}

export class ScanScreen extends Component {

  render() {
    return (

      <View style = {{flex:1}}>

      <Header headerText={'Buzzoek!'}/> // component nesting

      <Button onPress = {() => this.props.navigation.navigate('Scan')}>
        Stamp Here </Button>

      <Button onPress = {() => this.props.navigation.navigate('Cards')}>
        See Your Loyalty Cards </Button>

      </View>
    );
  }
}

export class CardsScreen extends Component {

  render() {

    return (

      <View style = {{flex:1}}> // important style to scroll all the way down

        <Header headerText={'Buzzoek!'}/> // component nesting

        <Button onPress={() => this.props.navigation.navigate('Home')} >
        Back to Home Screen
        </Button>

        <Button onPress={() => this.props.navigation.navigate('Scan')} >
        Back to Scan
        </Button>


      <CardList />
      </View>
    );};}


const RootStack = createStackNavigator(

  {

  Home: HomeScreen,
  Scan: ScanScreen,
  Cards: CardsScreen,
  },

  {
    initialRouteName: 'Home',
  }

);

export default class App extends Component { // DO NOT MESS WITH THIS

  render() {
    return (
      <RootStack />
    );
};
}


// Render it to the device (older version of RN)
//AppRegistry.registerComponent('Buzzoek', () => App);
