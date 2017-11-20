import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {

    handleChange = ({target}) => {
        const { value } = target;
        const { bookInfo } = this.props;

        if (value !== 'none') this.props.updateBook(bookInfo, value);
    }

    render(){
        const { bookInfo } = this.props;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${bookInfo.imageLinks.thumbnail}"` }}></div>
                    <div className="book-shelf-changer">
                        <select value={bookInfo.shelf} onChange={this.handleChange}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                    </div>
                    <div className="book-title">{ bookInfo.title }</div>
                    <div className="book-authors">{ bookInfo.authors.join(' ') }</div>
                </div>
            </li>
        );
    }
}

Book.propTypes = {
    bookInfo: PropTypes.object.isRequired,
    updateBook: PropTypes.func.isRequired
};

export default Book;