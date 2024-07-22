import axios, { AxiosResponse } from "axios";

let isInterceptorSetup: boolean = false;
export const setupErrorHandLingInterceptor = () => {
    if (!isInterceptorSetup) {
        axios.interceptors.response.use(
            (response: AxiosResponse) => response,
            (error) => {
                if (error.response) {
                    const statusCode = error.error.statusCode;
                    const data = error.response.data;
                    switch (statusCode) {
                        case 400:
                            if (data.response) {
                                const modelStateErrors = [];
                                for(const item,)
                            }
                    }

                }
            }
        )
    }
}