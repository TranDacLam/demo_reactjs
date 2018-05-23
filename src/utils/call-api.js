import axios from 'axios';

export default function callApi(url, method = 'GET', body){
    return axios({
        method: method,
        url: url,
        data: null
    }).catch(error => {
        console.log(error)
    });
};