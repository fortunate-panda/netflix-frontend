import axios from 'axios';

export default axios.create({
    baseURL:'http://a09c2265ea8e14299b091a9f3976a558-625612663.us-west-1.elb.amazonaws.com:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
