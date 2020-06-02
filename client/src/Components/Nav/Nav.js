import React from 'react'
import './styles.css';

const Nav = (props) => {
    return(
        <nav className='navbar'>
            <h2>{props.title}</h2>
            {props.children}
        </nav>
    )
}

export default Nav;