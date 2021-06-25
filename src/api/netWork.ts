import axios from 'axios'  //引入下载的axios
import Qs from 'qs'
import App from "@/App.vue";
import { createApp } from 'vue'
import {Toast} from "vant";
const app = createApp(App);
app.use(Toast);
const http = axios.create({
    baseURL:process.env.VUE_APP_URL,
    timeout:20000, //几秒
    transformResponse: [function (data) {
        // 可以对data做任何操作
        return Qs.stringify(data);
    }],
});//创建实例
http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
http.interceptors.request.use( //拦截器
    config=>{
        //config.headers.token ="12346"
        //要进行的操作
        console.log("--------- 查看是否拦截到 config--------------")
        return config   //放行
    },
    error=>{
        return Promise.reject(error)
    }
)

http.interceptors.response.use(    //响应拦截器
    response=>{
        console.log("--------- 查看是否拦截到 response--------------")
        return response.data;
    },
    error=>{
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    Toast({
                        message: "错误请求",
                        duration: 1000
                    });
                    break;
                case 401:
                    // Toast({
                    //   message: "未授权，请重新登录",
                    //   duration: 1000
                    // });
                    break;
                case 403:
                    Toast({
                        message: "服务器拒绝请求",
                        duration: 1000
                    });
                    break;
                case 404:
                    Toast({
                        message: "未找到请求资源",
                        duration: 1000
                    });
                    break;
                case 405:
                    Toast({
                        message: "方法禁用",
                        duration: 1000
                    });
                    break;
                case 408:
                    Toast({
                        message: "请求超时",
                        duration: 1000
                    });
                    break;
                case 429:
                    Toast({
                        message: "由于当前操作人数较多，建议您稍后再试。",
                        duration: 1500
                    });
                    break;
                case 500:
                    Toast({
                        message: "服务器端出错",
                        duration: 1000
                    });
                    break;
                case 501:
                    Toast({
                        message: "网络未实现",
                        duration: 1000
                    });
                    break;
                case 502:
                    Toast({
                        message: "网络错误",
                        duration: 1000
                    });
                    break;
                case 503:

                    Toast({
                        message: "服务不可用",
                        duration: 1000
                    });
                    break;
                case 504:
                    Toast({
                        message: "网络超时",
                        duration: 1000
                    });
                    break;
                case 505:

                    // Toast({
                    //   message: "http版本不支持该请求",
                    //   duration: 1000
                    // });
                    break;
                default:
                    Toast({
                        message: `连接错误${error.response.status}`,
                        duration: 1000
                    });
            }
        } else {
            Toast.clear();
            if (error.code == 'ECONNABORTED' && error.message.indexOf('timeout') != -1) {
                Toast({
                    message: "网络请求超时，请稍后再试",
                    duration: 1000
                });
            } else if (error.message.indexOf('Network') != -1) {
                Toast({
                    message: "无法连接到网络，请检查网络后再试",
                    duration: 1000
                });
            } else {
                Toast({
                    message: "连接到服务器失败",
                    duration: 1000
                });
            }
        }
        return Promise.reject(error)
    }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url:string,params={}){
    return new Promise((resolve,reject) => {
        http.get(url,{
            params:params
        })
            .then(response => {
                console.log(response)
                resolve(response);
            })
            .catch(err => {
                reject(err)
            })
    })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url:string,data = {},json:any){
    return new Promise((resolve,reject) => {
        http.post(
            url,
            data,
            {headers: {'Content-Type': json == 'undefined' ? 'application/x-www-form-urlencoded':'application/json'}}
        ).then(response => {
            resolve(response);
        },err => {
            reject(err)
        })
    })
}