// import libraries
import React, {Component} from 'react';
import {Text, View} from 'react-native';


// make Component

export default class Header extends Component {

  render() {

    const { textStyle, viewStyle } = styles;

    return (

<View style={viewStyle}>
      <Text style={textStyle}> {this.props.headerText} </Text>

      </View>


    );
  }
}

// make component available to other parts of the app
// done with the export statement at the beginning of the Component

const styles = {

  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};
