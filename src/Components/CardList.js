import React, { Component } from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getBooksQuery = gql`
    {
        cards{
            name
            card_type
            power
            toughness
        }
    }
`

class CardList extends Component {
  render() {
      console.log(this.props);
    return (
      <div className="CardList">
        <ul id="card-list">
            <li> Card # 1</li>
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(CardList);
