import axios from 'axios';

export const request = axios.create({
    baseURL: "https://conduit.productionready.io"
});
//插件导出只能做为默认成员
export default ({ store }) => {
    request.interceptors.request.use(function(config) {
        // Do something before request is sent       //设置token
        const { user } = store.state;
        if (user && user.token) {
            config.headers.Authorization = `Token ${user.token}`
        }
        return config;
    }, function(error) {
        // Do something with request error
        return Promise.reject(error);
    });
}