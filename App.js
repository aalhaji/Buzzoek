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
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import CardList from './src/components/CardList';

// create a Component
export default class App extends Component {

  render() {
    return (

      <View style = {{flex:1}}> // important style to scroll all the way down

      <Header headerText={'Buzzoek!'}/> // component nesting
      <CardList />

      </View>
    );
  }
}

// Render it to the device
AppRegistry.registerComponent('Buzzoek', () => App);
