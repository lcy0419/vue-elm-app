import axios from 'axios';
import store from '../store'



// 请求拦截
axios.interceptors.request.use(function (config) {

    store.dispatch("setLoadingAsync", true);
    return config;
}, function (error) {
    return Promise.reject(error);
})


// 响应拦截
axios.interceptors.response.use(function (response) {
    store.dispatch("setLoadingAsync", false);

    return response;
}, function (error) {
    store.dispatch("setLoadingAsync", false);

    return Promise.reject(error);
})

export default axios;
