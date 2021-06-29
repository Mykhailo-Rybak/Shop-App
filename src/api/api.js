import axios from "axios";

export default axios.create({
    baseURL: 'https://mocki.io/v1/34bcea42-37aa-4587-a815-1eecd9a1239d',
    responseType: 'json'
})
