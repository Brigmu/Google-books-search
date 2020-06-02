import React, { useEffect, useState } from 'react';
import Nav from '../../Components/Nav/Nav';
import NavbarLink from '../../Components/NavbarLink/Navbarlink';
import { getSavedBooks, removeSavedBook } from '../../Utils/API/API';
import Container from '../../Components/Container/Container';
import Card from '../../Components/Card/Card';
import Title from '../../Components/Title/Title';

const Saved = (props) => {
    const [savedBooks, setSavedBooks] = useState([]);
    useEffect(()=> {
        getSavedBooks()
        .then(res => {
            console.log(res.data);
            setSavedBooks(res.data);
        })
    }, [])

    const handleDelete = (e) => {
        const id = e.target.getAttribute('data-id');
        console.log(id);
        removeSavedBook(id)
        const filtered = savedBooks.filter(book =>{
            return book._id !== id;
        })
        setSavedBooks(filtered);
        console.log(filtered);
    }
    return(
        <div>
            <Nav title='Google books search'>
                <div>
                    <NavbarLink text='Search' link='/' />
                    <NavbarLink text='Saved' link='/saved' />
                </div>
            </Nav>
            <Title></Title>
            <Container className='search-container'>
                {savedBooks.length !== 0 ? savedBooks.map(book => (
                    <Card handleFunction={handleDelete} btnText='Delete' id={book._id} title={book.title} authors={book.authors} img={book.image} description={book.description} link={book.link}></Card>
                )) : <></>}
            </Container>
        </div>
    )
}

export default Saved;