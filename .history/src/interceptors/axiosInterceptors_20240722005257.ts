import axios, { AxiosResponse } from "axios";

let isInterceptorSetup: boolean = false;
export const setupErrorHandLingInterceptor = () => {
    if(!isInterceptorSetup){
        axios.interceptors.response.use(
            (response:AxiosResponse)
        )
    }
}