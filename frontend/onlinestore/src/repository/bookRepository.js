import axios from '../axios_instance/axios';


const BookService  = {
    fetchBooks: () => {
        return axios.get("/api/books");
    },
    fetchBookById: (id) => {

        return axios.get(`/api/books/${id}`);
    },
    searchBookByTitle: (title) => {
        return axios.get(`api/books?title=${title}`)
    }
};


export default BookService;