import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com/'

};
const key = '72cf4722';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`?apikey=${key}&t=${title}`)
            .then((response) => response.data)
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get(`?apikey=${key}&t=${title}&type=${type}`)
            .then((response) => response.data)
    }
};


export default API;





