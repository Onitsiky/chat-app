import axios, { AxiosInstance } from 'axios'

export const authApi = (): AxiosInstance => {
    return axios.create({
        baseURL: "http://localhost:8080",
        timeout: 1000,
        headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',
        },
    })
}

export const api = (): AxiosInstance => {
    return axios.create({
        baseURL: "http://localhost:8080",
        timeout: 1000,
        headers: {
            Accept: '*/*',
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
    })
}