import axios from 'axios';

export const getSavedBooks = () => {
    return axios.get('/api/books');
}

export const saveABook = (data) => {
    return axios.post('/api/books', data);
}

export const removeSavedBook = (id) => {
    return axios.delete(`/api/books/${id}`)
}

export const searchGoogleBooks = (bookname) => {
    return axios.get(``);
}