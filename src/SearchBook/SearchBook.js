import React, { Component } from 'react'
import SearchBox from './SearchBox';
import request from 'superagent';
import BookList from '../Books/BookList';

export default class SearchBook extends Component {

    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: '',
            sort: ''
        }
    }

     bookSearch = (e) => {
        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField })
            .then((data) => {
                console.log(data);
                this.setState({ books: [...data.body.items]})
            })
    }

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value })
    }

    

    render() {
        return (
            <div className="SearchBook">
                <SearchBox
                 handleSearch={this.handleSearch}
                 bookSearch={this.bookSearch}
                  />
                 <BookList books={this.state.books}/>
            </div>
        )
    }
}


