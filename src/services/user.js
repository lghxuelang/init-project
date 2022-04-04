import axios from 'axios';
import '../mock/api';

export const getUserList = () =>{
    return axios.get('/api/user/getUserList');
}

export const updateUser = () => {
    return axios.get('/api/user/updateUser');
}

