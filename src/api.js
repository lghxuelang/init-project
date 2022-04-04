import axios from 'axios';
import './mock/api';

export const getTestData = () =>{
    return axios.get('/api/user/getList');
}

export const getPP =()=>{
    return axios.get('/api/user/getList');
}