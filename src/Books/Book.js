import React from 'react'

export default function Book(props) {
    return (
        <div className='book-container'>
            <img src={props.image} alt=""/>
            <div className="description">
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
