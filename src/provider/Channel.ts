import { api } from '@/provider/api'
import { IChannels } from '@/provider/Types'

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
        throw new Error('Error')
    }

}