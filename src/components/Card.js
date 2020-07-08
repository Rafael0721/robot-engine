import React, { Component } from 'react';

class Card extends Component{
  render(){
    return (
      <div className="bg-light-blue tc dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt="coverImg" src={`https://robohash.org/${this.props.num}?200x200`} />
        <div>
          <h3>{this.props.name}</h3>
          <p>{this.props.contact}</p>
        </div>
      </div>
    )
  }
}

export default Card;
