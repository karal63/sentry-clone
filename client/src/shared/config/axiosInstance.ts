import axios, {
    type AxiosResponse,
    type InternalAxiosRequestConfig,
} from "axios";

export const axiosInstance = axios.create({
    withCredentials: true,
});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
        "accessToken"
    )}`;
    return config;
});

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error) => {
        const originalRequest = error.config;
        if (
            error.response?.status === 401 &&
            !originalRequest._retry &&
            !originalRequest.url.includes("/refresh")
        ) {
            originalRequest._retry = true;
            try {
                const res = await axiosInstance.get(
                    `${import.meta.env.VITE_API_URL}/refresh`
                );
                localStorage.setItem("accessToken", res.data.accessToken);
                return axiosInstance.request(originalRequest);
            } catch (err) {
                console.log(err);
                return Promise.reject(err);
            }
        }
        throw error;
    }
);
// create interceptor and export axxios instance then use in api requests
