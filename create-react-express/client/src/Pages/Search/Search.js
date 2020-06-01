import React from 'react'
import Nav from '../../Components/Nav/Nav';
import Title from '../../Components/Title/Title';
import NavbarLink from '../../Components/NavbarLink/Navbarlink';

const Search = (props) => {
    return(
        <div>
            <Nav title='Google books search'>
                <div>
                <NavbarLink text='Search' link='/' />
                <NavbarLink text='Saved' link='/saved' />

                </div>
            </Nav>
            <Title />
        </div>
    )
}

export default Search;