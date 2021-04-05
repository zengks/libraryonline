import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const url = "https://www.googleapis.com/books/v1/volumes?q=";

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            title: "Harry Potter",
            hasError: false,
            bookFound: true

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAPI = this.handleAPI.bind(this);
      }

      handleAPI() {
        let api = url + this.state.title;
        console.log(api)
        const promise = axios.get(api);
        promise
        .then((res) => {
            const items = res.data.items;
            if(items){
                this.setState({items});
            }else{
                this.setState({bookFound: false});
            }
            
        })

        .catch((err) => {
          console.log(err);
          this.setState({hasError: true});
        })
      }
      
      componentDidMount() {
        this.handleAPI();
      }

      handleChange(e){
        this.setState({title: e.target.value});
        e.preventDefault();
      }

      handleSubmit(e){
        this.handleAPI();
        e.preventDefault();
      }

      render(){
          
        return(
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} placeholder = "Eg. Harry Potter"></input>
                    <button type="submit">Search</button>
                </form>

                {this.state.hasError && (
                    <h2>Request Failed</h2>
                )}

                {this.state.bookFound ? (
                <div className="list">
                    <ul>
                        {this.state.items.map(item => {
                                let image;
                                let imageLink = item.volumeInfo.imageLinks;
                                if(typeof(imageLink) == 'undefined') {
                                    image = <img src='' alt={item.volumeInfo.title}></img>;
                                }else{
                                    image = <img src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title}></img>;
                                }
                                
                                return(
                                    <li className="bookList" key={item.id}>
                                        <div className="bookImage">
                                            {image}
                                        </div>

                                        <div className="bookDetail">
                                            <div className="bookTitle">
                                                <a href="/">{item.volumeInfo.title}</a>
                                            </div>

                                            <div className="bookCate">
                                                <ul>
                                                    <li>{item.volumeInfo.categories}</li>
                                                </ul>
                                            </div>
                                            
                                            <div className="bookDes">
                                                {item.volumeInfo.description}
                                            </div>

                                        </div>
                                    </li>
                                    
                                )
                            })}
                    </ul>
                        
                </div>
                ) : "No Books Found for" + (this.state.title)}
            </div>
        );
      }
}


SearchBar.propTypes = {
    title: PropTypes.array,
  };

export default SearchBar;