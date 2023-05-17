import { api, authApi } from '@/provider/api'

export const login = (data: any) => {
    const response = authApi().post("/users/login", data);
    response
        .then((res) => {
            sessionStorage.setItem('token', res.data.user.token)

        })
        .catch((error) => console.error(error.message));
}

export const create = (data: any) => {
    const response = authApi().post("/users", data);
    response
        .then((res) => sessionStorage.setItem('token', res.data.user.token))
        .catch((error) => console.error(error.message));
}

export const getInfo = async () => {
    return await api().get("/user", {
        headers: {
            'Accept': '*/*',
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
        }
    });
}