import axios from 'axios';

export default axios.create({

    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d3ckCRc7pUDlhUqXMMjTPaw8tzKZyvU4oUD20kqHePo'
    }

});