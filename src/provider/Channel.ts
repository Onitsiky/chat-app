import { api } from '@/provider/api'
import { createdChannel, IChannels } from '@/provider/Types'

export const getChannels = async () => {
    try {
        const response: IChannels = (await api().get('/channels', {
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

export const createChannel = async (data: any) => {
    try {
        const response: createdChannel = (await api().post('/channel', data, {
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