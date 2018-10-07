import React, {Component} from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Container from './common/Container';
import ContainerSection from './common/ContainerSection';
import Button from './common/Button';

// create component

export default class CardDetail extends Component {

  render() {

    return(

    <Container>

    <ContainerSection>

    <View style = {styles.thumbnailContainerStyle}>
    <Image style={styles.thumbnailStyle}
     source={{ uri: this.props.card.thumbnail_image}} />
    </View>

    <View style={styles.headerContainerStyle}>

    <Text> {this.props.card.artist} </Text>
    <Text style = {styles.headerTextStyle}> {this.props.card.title} </Text>

    </View>

    </ContainerSection>

    <ContainerSection>

    <Image style={styles.imageStyle} source = {{ uri: this.props.card.image }} />

    </ContainerSection>

    <ContainerSection>

    <Button onPress = {() => Linking.openURL(this.props.card.url)}>

    Navigate to Website

    </Button>

    </ContainerSection>

    </Container>

);

  }
}

const styles = {

  headerContainerStyle: {

    flexDirection: 'column',
    justifyContent: 'space-around'

  },

  headerTextStyle: {

    fontSize: 18
  },

  thumbnailStyle: {

    height: 50,
    width: 50

  },

  thumbnailContainerStyle: {

    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10

  },

  imageStyle: {

    height: 300,
    flex: 1, // take all the space you have
    width: null


  }

}
