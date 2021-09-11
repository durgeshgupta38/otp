import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://172.16.10.252:3000/'
})

export default instance;