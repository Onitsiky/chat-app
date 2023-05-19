import { api, authApi } from '@/provider/api'
import { IUserInfo } from '@/provider/Types'

export const loginUser =  async (data: any) => {
    try {
        const response:IUserInfo  = (await authApi().post("/users/login", data)).data.user;
        sessionStorage.setItem('token', response.token);
        return {user : response, authenticate : true};
    }catch (e){
        return {data: null as any, authenticate : false};
    }
}

export const createUser = (data: any) => {
    const response = authApi().post("/users", data);
    response
        .then((res) => sessionStorage.setItem('token', res.data.user.token))
        .catch((error) => console.error(error.message));
}

export const getUserInfo = async () => {
    try {
        const response: IUserInfo = (await api().get("/user", {
            headers: {
                'Accept': '*/*',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
            }
        })).data;
        return response;
    }catch (e) {
        throw new Error('Error when getting user infos');
    }
}