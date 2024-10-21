import axios from 'axios';

const api = axios.create({
    baseURL: 'http://ec2-23-23-13-244.compute-1.amazonaws.com:3333',
})

export default api;