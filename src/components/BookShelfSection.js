import React from 'react';

const BookShelfSection = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                { props.books() }
            </ol>
            </div>
        </div>
    );
}

export default BookShelfSection;

