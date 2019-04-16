import axios from 'axios';
// import {Message} from 'element-react';
import convert from './convert.js'; //返回结果转为中文提示
const Axios = axios.create({
    // baseURL: 'http://121.42.253.149:18859/app/mock/31/v1/',
    // baseURL: 'http://192.168.1.133:7001/v1',
    // baseURL: 'http://114.215.46.56:17748/v1/', // 正式服务器api
    baseURL: 'http://121.42.253.149:17748/v1/', //测试服务器api
    timeout: 30000,
    responseType: 'json',
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
});

Axios.interceptors.request.use(
    (config) => {
        if (config.method === 'get') {
            config.params = config.data;
        }

        if (sessionStorage.actk) {
            config.headers.common.actk = sessionStorage.getItem('actk');
        }

        return config;
    },
    (error) => {
        // Message({
        //     showClose: true,
        //     message: error,
        //     type: 'error.data.error.message',
        // });
        alert(error)
        return Promise.reject(error);
    },
);

Axios.interceptors.response.use(
    res => {
        if (!res.data.code) {
            // Message({
            //     showClose: true,
            //     message: '请求超时，请重新请求',
            //     type: 'error'
            // });
            alert('请求超时，请重新请求')
            return Promise.reject(res.data);
        } else if (res.data.code !== 200) {
            res.data.message = convert(res.data.message);
            const message = res.data.errMsg ? res.data.errMsg : res.data.message
            // Message({
            //     showClose: true,
            //     message: res.data.errMsg ? res.data.errMsg : res.data.message,
            //     type: 'error'
            // });
            alert(message)
            return Promise.reject(res.data);
        }
        res.data.message = convert(res.data.message);
        return res.data;

    });
export default Axios;
