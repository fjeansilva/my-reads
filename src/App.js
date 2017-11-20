import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
import Search from './components/Search';
import ListOfBooks from './components/ListOfBooks';

import './App.css';

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    });
  }

  updateBook = (book, shelf) => {
  
    // Find the book on list and update it to new shelf
    this.setState((state) => ({
      books: state.books.map((b) => b.id === book.id ? b.shelf = shelf : false )
    }));
    
    // Update the book in database
    BooksAPI.update(book, shelf);
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListOfBooks 
            onUpdateBook={this.updateBook}
            books={books} 
          />
        )}/>
        <Route path="/search" component={Search} />
      </div>
    );
  }
}

export default BooksApp;
