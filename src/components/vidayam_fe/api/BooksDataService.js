import axios from 'axios'
import header from '../header/header';
import {API_URL, JPA_API_URL} from '../Constants'
class BooksDataService {
    executeHelloWorldService() {
        return axios.get(`${JPA_API_URL}/getCars/2`);
        // console.log('Hello World Service')
    }
    fetchAllBooks() {
        return axios.get(`${JPA_API_URL}/getBooks`)
    }
    fetchAllItemsInCart(){
        return axios.get(`${JPA_API_URL}/getItemsInCart`)
    }
    saveToCart(id){
        return axios.post(`${JPA_API_URL}/saveToCart/${id}`)
    }
    deleteFromCart(id){
        return axios.delete(`${JPA_API_URL}/deleteItem/${id}`)
    }   
}
export default new BooksDataService()