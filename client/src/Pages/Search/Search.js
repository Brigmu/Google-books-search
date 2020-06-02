import React, { useRef, useState } from 'react';
import './styles.css';
import Nav from '../../Components/Nav/Nav';
import Title from '../../Components/Title/Title';
import NavbarLink from '../../Components/NavbarLink/Navbarlink';
import Container from '../../Components/Container/Container';
import { searchGoogleBooks, saveABook } from '../../Utils/API/API';
import Card from '../../Components/Card/Card';

const Search = (props) => {
    const [searchedBooks, setSearchedBooks] = useState([])
    const searchRef = useRef();

    const handleSearch = (e) => {
        e.preventDefault();
        searchGoogleBooks(searchRef.current.value)
        .then(response => {
            const data = response.data.items;
            setSearchedBooks(data);
        })
    }

    const handleSaveBtn = (e) => {
        const id = e.target.getAttribute('data-id');
        let stateIndex;
        for(let i = 0; i < searchedBooks.length; i++){
            console.log(searchedBooks[i].accessInfo.id, id)
            if(searchedBooks[i].id === id){
                stateIndex = i;
                break;
            }
        }
        const newBook = {
            googleId: id,
            title: searchedBooks[stateIndex].volumeInfo.title,
            authors: searchedBooks[stateIndex].volumeInfo.authors,
            description: searchedBooks[stateIndex].volumeInfo.description,
            image: searchedBooks[stateIndex].volumeInfo.imageLinks.smallThumbnail,
            link: searchedBooks[stateIndex].selfLink,
        }
        saveABook(newBook)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
    return(
        <div>
            <Nav title='Google books search'>
                <div>
                <NavbarLink text='Search' link='/' />
                <NavbarLink text='Saved' link='/saved' />

                </div>
            </Nav>
            <Title />
            <Container className='search-container'>
                <form>
                    <input ref={searchRef}></input>
                    <button onClick={handleSearch}>Search</button>
                </form>
                {searchedBooks.length !== 0 ? searchedBooks.map(book => (
                    <Card handleFunction={handleSaveBtn} btnText={'Save'} id={!('id' in book) ? 'no id' : book.id} title={!('title' in book.volumeInfo) ? 'No title found' : book.volumeInfo.title} authors={!('authors' in book.volumeInfo) ? [] : book.volumeInfo.authors} img={!('imageLinks' in book.volumeInfo) ? 'No image found' : book.volumeInfo.imageLinks.smallThumbnail} description={!('description' in book.volumeInfo) ? 'No description available' : book.volumeInfo.description} link={!('infoLink' in book.volumeInfo) ? 'no link available' : book.volumeInfo.infoLink }></Card>
                )) : <> </>}
            </Container>
        </div>
    )
}

export default Search;