import React, { Component } from 'react';

class SearchBox extends Component{

  render(){
    return (
      <div>
        <input
          className="searchBox"
          type="search"
          placeholder="search robots"
          onChange={this.props.searchFunction}
        />
      </div>
    )
  }
}

export default SearchBox;
