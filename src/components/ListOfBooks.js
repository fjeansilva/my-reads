import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Book from './Book';
import BookShelfSection from './BookShelfSection';

class ListOfBooks extends Component {

    filterBooksReading = () => {
        return this.filterBooksByShelf('currentlyReading');
    }

    filterBooksWantRead = () => {
        return this.filterBooksByShelf('wantToRead');
    }

    filterBooksRead = () => {
        return this.filterBooksByShelf('read');
    }

    filterBooksByShelf = (shelf) => {
        const { books, onUpdateBook } = this.props;

        // Filter the list the books of shelf and return a list of component Book
        const items = books.filter((b) => b.shelf === shelf).map((b) => <Book key={b.id} bookInfo={b} updateBook={onUpdateBook} />);

        return items.length > 0 ? items : <div>Not exists yet books on this shelf</div>;
    }

    render(){
        const { books } = this.props;

        if (books.length === 0) return <div>Loading...</div>;
    
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <BookShelfSection title="Currently Reading" books={this.filterBooksReading} />
                    <BookShelfSection title="Want to Read" books={this.filterBooksWantRead} />
                    <BookShelfSection title="Read" books={this.filterBooksRead} />
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
          </div>
        );
    }
}


ListOfBooks.propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
};


export default ListOfBooks;