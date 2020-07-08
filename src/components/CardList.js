import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component{
  render(){
    const {robots} = this.props;
    return (
      <div className="tc">
        {
          robots.map( (robot, i) => {
            return <Card
                      key={i}
                      num={robot.id}
                      name={robot.name}
                      contact={robot.email}
                    />
          })
        }
      </div >
    )
  }
}

export default CardList;
