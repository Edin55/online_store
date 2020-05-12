import axios from '../axios_instance/axios';
import authHeader from "./auth-header";

const BookService  = {
    fetchBooks: () => {
        return axios.get("/api/books", { headers: authHeader()});
    },
    fetchBookById: (id) => {
        return axios.get(`/api/books/${id}`, { headers: authHeader() });
    },
    searchBookByTitle: (title) => {
        return axios.get(`api/books?title=${title}`, { headers: authHeader() })
    }
};


export default BookService;