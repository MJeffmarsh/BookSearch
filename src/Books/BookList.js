import React from 'react';
import Book from './Book';

export default function BookList(props) {
    return (
        <div className="list-container">
            {
                props.books.map((book, i) => {
                    return <Book 
                    key={i}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                     />
                })
            }
        </div>
    )
}
