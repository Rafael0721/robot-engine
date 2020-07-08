import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import 'tachyons';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( (res) => {
        return res.json();
      } )
      .then( (userData) => {
        this.setState( {robots: userData} );
      } );
  }

  // 在component元件內定的function以外的自訂function
  // 必須用箭頭函式才能讓onsearch裡的this指向原來的scope 而不是input
  onSearch = (e) => {
    // console.log(e.target.value);
    this.setState( {searchField: e.target.value} );
  }

  render(){
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter( (robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    } );

    return !robots.length ? (
      <div className="loading-box">
        <h1 className="title">Loading...</h1>
      </div>
    ) :
    (
      <div className="App tc">
        <h1 className="title">RoboEngine</h1>
        <SearchBox searchFunction={this.onSearch} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );

  }
}

export default App;
