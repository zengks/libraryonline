import React, {Component} from 'react';
import SearchBar from './searchBar'
import './App.css';


class App extends Component{
  // constructor(){
  //   super();
  // }

  render() {
    return(
      <div className="App">
        <h1>BookStore</h1>
        <SearchBar title="">
        </SearchBar>
      </div>
    )
  }
}

export default App;
