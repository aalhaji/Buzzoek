import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import CardDetail from './CardDetail'

//make component

export default class CardList extends Component {

  state = { cards : [] }; // initial empty state

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState( { cards: response.data } ));
  }

  renderCards() {

    return this.state.cards.map(card =>
      <CardDetail key={card.title} card={card} />);

  }

  render() {

    console.log(this.state);
    return (

      <ScrollView>

      {this.renderCards()}

      </ScrollView>
    )

  }

}
