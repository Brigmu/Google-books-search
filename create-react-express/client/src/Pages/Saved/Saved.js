import React from 'react';
import Nav from '../../Components/Nav/Nav';
import NavbarLink from '../../Components/NavbarLink/Navbarlink';

const Saved = (props) => {
    return(
        <div>
            <Nav title='Google books search'>
                <div>
                    <NavbarLink text='Search' link='/' />
                    <NavbarLink text='Saved' link='/saved' />
                </div>
            </Nav>
        </div>
    )
}

export default Saved;