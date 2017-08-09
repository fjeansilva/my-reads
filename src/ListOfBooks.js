import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './Book'

class ListOfBooks extends React.Component {

    filterBooksReading = () => {
        return this.filterBooksByShelf('currentlyReading')
    }

    filterBooksWantRead = () => {
        return this.filterBooksByShelf('wantToRead')
    }

    filterBooksRead = () => {
        return this.filterBooksByShelf('read')
    }

    filterBooksByShelf = (shelf) => {
        const { books } = this.props

        let items = books.filter( book => {
            return book.shelf === shelf
        })

        items = items.map( book => {
            return <Book key={book.id} bookInfo={book} updateBook={ this.props.onUpdateBook } />
        })

        return items.length > 0 ? items : <div>Not exists yet books on this shelf</div>

    }

    render(){
        const { books } = this.props

        if (books.length === 0) return <div>Loading...</div>
    
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                        <ol className="books-grid">
                            { this.filterBooksReading() }
                        </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                        <ol className="books-grid">
                            { this.filterBooksWantRead() }
                        </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                        <ol className="books-grid">
                            { this.filterBooksRead() }
                        </ol>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
          </div>
        )
    }
}


ListOfBooks.propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
}


export default ListOfBooks