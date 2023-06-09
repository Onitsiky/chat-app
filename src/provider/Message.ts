import { api } from '@/provider/api'

export const sendMessage = async(data: any) => {
    try {
        const response = (await api().post('/message', data, {
            headers: {
                'Accept': '*/*',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
            },
        })).data;
        return response;
    } catch (e) {
        throw new Error('Error');
    }
}

export const getMessageByUser = async (userId: any) => {
    try {
        const response = (await api().get(`/messages/${userId}`, {
            headers: {
                'Accept': '*/*',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
            },
        })).data;
        return response;
    }catch (e) {
        throw new Error('Error');
    }
}

export const getMessageByChannel = async (channelId: any) => {
    try {
        const response = (await api().get(`/messages/channel/${channelId}`, {
            headers: {
                'Accept': '*/*',
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
            },
        })).data;
        return response;
    }catch (e) {
        throw new Error('Error');
    }
}