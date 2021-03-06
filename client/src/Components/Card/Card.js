import React from 'react';
import './styles.css';

const Card = (props) => {
    return (
        <div className='card' key={props.id}>
            <div className='card-img'>
                <img src={props.img} alt='book'></img>
            </div>
            <div className='card-info'>
                <h2>Title: {props.title}</h2>
                <h2>Author(s): {props.authors.length === 0 ? 'No authors found' : props.authors.join(', ')}</h2>
                <p>Desciption: {props.description}</p>
                <a href={props.link}>Google books</a>
            </div>
            <div className='card-btn'>
                <button onClick={props.handleFunction} data-id={props.id}>{props.btnText}</button>
            </div>
        </div>
    )
}

export default Card;