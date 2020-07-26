import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID fUXMIEylj7_HSIhsctNplqHARyCPH1EpwvX4Zv53nY8'
    }
});