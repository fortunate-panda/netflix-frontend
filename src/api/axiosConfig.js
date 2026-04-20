import axios from 'axios';

export default axios.create({
    baseURL:'http://52.53.181.83:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
