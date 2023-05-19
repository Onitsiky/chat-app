import { IChannels, IUserInfo } from '@/provider/Types'

export interface UserStore {
    currentUser: IUserInfo | null,
    setCurrentUser: (user: IUserInfo) => void
}

export interface ChannelStore {
    channels: IChannels,
    setChannels: (channels: IChannels) => void
}