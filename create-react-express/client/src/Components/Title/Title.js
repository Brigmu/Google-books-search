import React from 'react'
import './styles.css';

const Title = (props) => {
    return(
        <div className={props.class}>
            <h1>React Google Books Search</h1>
            <h4>Search for and save books of interest</h4>
        </div>
    )
}

export default Title;