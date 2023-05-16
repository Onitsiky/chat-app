import { IUserResponse } from '@/provider/userTypes'
import { api, authApi } from '@/provider/api'
import { AxiosResponse } from 'axios'

export const loginUser = (data: any) => {
    const response = authApi().post('/users/login', data)
    response
        .then((res) => {
            sessionStorage.setItem('token', res.data.user.token)
        })
        .catch((e) => console.error(e.message))
}

export const createUser = (data: any) => {
    const response = authApi().post('/users', data)
    response
        .then((res) => {
            sessionStorage.setItem('token', res.data.user.token)
        })
        .catch((e) => console.error(e.message))
}

export const fetchUser = async () => {
    return await api().get('/user')
}

export const updateUserInfo = (
    data: any
): Promise<AxiosResponse<IUserResponse> | void> => {
    const response = api().put('/user', data)
    return response
        .then((res) => res.data)
        .catch((e) => console.error(e.message))
}
