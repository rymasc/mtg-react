import React, { Component } from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getCardsQuery = gql(`
query {
  listCards(limit: 1000) {
    items {
      id
      name
      card_type
      power
      toughness
    }
  }
}`);

class CardList extends Component {

  displayCards(){
      const data = this.props.data;
      console.log(data);
      
      if (data.loading){
          return(<div>loading cards...</div>);
      } else{
          return data.listCards.items.map(card =>{
              return(
                  <li key={card.id}>{card.name} - {card.card_type} {card.power}/{card.toughness}</li>
              );
          });
      }
  }
  render() {
    return (
      <div className="CardList">
        <ul id="card-list">
            {this.displayCards()}
        </ul>
      </div>
    );
  }
}

export default graphql(getCardsQuery)(CardList);



{
  client(id: 1234){
    first_name
    last_name
    date
  }
}

{
  clients(limit: 1000){
    items{
      name
      PaymentAddress
      fFUKYOU
    }
  }
}