import {
    IAllUser,
    IChannel,
    IChannels,
    IMessage,
    IMessages,
    IMinChannel,
    IUser,
    IUserInfo,
    User,
} from '@/provider/Types'

export interface UserStore {
    currentUser: IUserInfo | null,
    setCurrentUser: (user: IUserInfo) => void
}

export interface ChannelStore {
    channels: IChannels,
    setChannels: (channels: IChannels) => void
}

export interface CurrentChannelStore {
    currentChannel: IChannel | null,
    setCurrentChannel: (channel: IChannel | null) => void
}

export interface CurrentFriend {
    currentFriend: User | null,
    setCurrentFriend: (user: User) => void
}
export interface UsersStore {
    users: IAllUser,
    setUsers: (users: IAllUser) => void
}

export interface ChannelIdStore {
    channelId: number | null,
    channelName: string | null,
    setChannelId: (id: number) => void,
    setChannelName: (name: string) => void
}

export interface CreateMessageStore {
    message: string,
    setMessage: (toSend: string) => void
}

export interface ChannelMessagesStore {
    messages: IMessages | null,
    setMessages: (messages: IMessages) => void
}