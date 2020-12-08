import axios from 'axios';

const instance = axios.create({
    baseURL: "http://nkda.swm.distronix.in:3000/api/v1.1/devstat/lastMultiple",
});

const api = {
    fetchData: (device_id: string) => instance({
        method: 'POST',
        url: '/',
        'data': {
            'devid': device_id,
        }
    })
};

export default api;