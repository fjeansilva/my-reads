import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Search from './Search'
import ListOfBooks from './ListOfBooks'

import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    });
  }

  updateBook = (book, shelf) => {
    let { books } = this.state
    books = books.map((b) => {
      if (b.id === book.id) {
        b.shelf = shelf
      }

      return b
    })

    this.setState({ books })

    BooksAPI.update(book, shelf)
  }

  render() {
    const { books } = this.state
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
    )
  }
}

export default BooksApp
