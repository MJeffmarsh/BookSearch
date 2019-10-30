import React from 'react'

export default function SearchBox(props) {
    return (
        <div>
            <form onSubmit={props.bookSearch} action="">
                <input 
                onChange={props.handleSearch} 
                type='text'/>
                <button type="submit">Search</button>
                <select defaultValue='Sort' onChange={}>
                    <option></option>
                </select>
                <select defaultValue='Sort' onChange={}>

                </select>
            </form> 
        </div>
    )
}
