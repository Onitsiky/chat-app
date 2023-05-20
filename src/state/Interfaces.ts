import { IAllUser, IChannels, IUserInfo } from '@/provider/Types'

export interface UserStore {
    currentUser: IUserInfo | null,
    setCurrentUser: (user: IUserInfo) => void
}

export interface ChannelStore {
    channels: IChannels,
    setChannels: (channels: IChannels) => void
}

export interface UsersStore {
    users: IAllUser,
    setUsers: (users: IAllUser) => void
}