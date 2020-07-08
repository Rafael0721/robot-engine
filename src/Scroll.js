import React, {Component} from 'react';

class Scroll extends Component{
  render(){
    return (
      <div style={ {overflowY: 'scroll',
                    border: '1px solid #000',
                    height: '500px',
                    padding: '30px'} }>
        {this.props.children}
      </div>
    )
  }
}

export default Scroll;
