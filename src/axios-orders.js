import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-awesome-burger-5373c.firebaseio.com/'
});

export default instance;