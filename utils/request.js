import axios from 'axios';
const request = axios.create({
    baseURL: "https://conduit.productionready.io"
});
// request.interceptors.request.use(function(config) {
//     // Do something before request is sent
//     console.log(233641)
//         //设置token
//     config.headers.Authorization = `Token `
//     return config;
// }, function(error) {
//     // Do something with request error
//     return Promise.reject(error);
// });
export default request