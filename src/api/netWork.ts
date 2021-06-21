import axios from 'axios'  //引入下载的axios
const http = axios.create({
    baseURL:'接口地址',
    timeout:20000 //几秒
});//创建实例
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

http.interceptors.response.use(    //请求拦截器
    response=>{
        console.log("--------- 查看是否拦截到 response--------------")
        return response;
    },
    error=>{
        return Promise.reject(error)
    }
)