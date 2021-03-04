import axios from "axios";
import dotenv from "dotenv"
dotenv.config();

axios.defaults.baseURL = process.env.BASE_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.SECRET_KEY}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(function (config) {
    config.metadata = { startTime: new Date()}
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    response.config.metadata.endTime = new Date()
    response.duration = response.config.metadata.endTime - response.config.metadata.startTime
    return response;
}, function (error) {
    error.config.metadata.endTime = new Date();
    error.duration = error.config.metadata.endTime - error.config.metadata.startTime;
    return Promise.reject(error);
});

export default axios;
