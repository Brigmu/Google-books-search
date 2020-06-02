import React from 'react'
import './styles.css';

const NavbarLink = (props) => {
    return (
        <a className='navbar-link' href={props.link}>{props.text}</a>
    )
}

export default NavbarLink;