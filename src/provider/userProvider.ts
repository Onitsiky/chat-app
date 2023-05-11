import axios, {AxiosInstance} from "axios";
import {IResponse} from "@/provider/userTypes";
const api = ():AxiosInstance => {
    return axios.create({
        baseURL: 'http://localhost:8080',
        timeout: 1000,
        headers: {
            Accept: '*/*',
            "Content-Type": "application/json"
        }
    });
}

export const loginUser = (data:any) => {
    const response = api().post(
        '/users/login', data
    );
    response.then((res) => {
        const data:IResponse = res.data;
        sessionStorage.setItem('token', data.user.token);
    }).catch((e) => console.error(e));
}
