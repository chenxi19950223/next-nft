import axios, {AxiosError, AxiosPromise, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from "axios";

// 创建正式服务axios实例
const service = axios.create({
    baseURL: '', // url = base url + request urld
    timeout: 500000, // request timeout
    withCredentials: true // send cookies when cross-domain requests
})


// 接口地址
const arr: string[] = [];

// 请求拦截
service.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        return config
    },
    (error: any) => {
        return Promise.reject(error)
    }
)
// 请求返回
service.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    error => error
)

/**
 * 统一接口
 * @param {AxiosRequestConfig<D>} config 参数
 * @return {Promise<ResponseData<T>>} 返回数据
 */
function request<T, D>(config: AxiosRequestConfig<D>): AxiosPromise<any> {
    return new Promise((resolve, reject) => {
        service(config).then((res: AxiosResponse<any> | AxiosError) => {
            if ((res as AxiosError)?.name !== AxiosError.name) {
                resolve((res as AxiosResponse<any>).data);
            }
        })
    });
}

export default request;
