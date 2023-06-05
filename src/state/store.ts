import { create } from 'zustand'
import {
    ChannelIdStore,
    ChannelMessagesStore,
    ChannelStore,
    CreateMessageStore, CurrentChannelStore,
    UsersStore,
    UserStore,
} from '@/state/Interfaces'
import { set } from 'react-hook-form'

export const useUser = create<UserStore>()((set) => ({
    currentUser: null,
    setCurrentUser: (user) => set((state) => ({
        currentUser: user
    }))
}))

export const useChannel = create<ChannelStore>()((set) => ({
    channels: null,
    setChannels: (toSet) => set(state => ({
        channels: toSet
    }))
}))

export const useCurrentChannel = create<CurrentChannelStore>()((set) => ({
    currentChannel: null,
    setCurrentChannel: (toSet) => set(state => ({
        currentChannel: toSet
    }))
}))
export const useAllUsers = create<UsersStore>()((set) => ({
    users: null,
    setUsers: (toSet) => set(state => ({
        users: toSet
    }))
}))

export const useMinChannel = create<ChannelIdStore>()((set) => ({
    channelId: null,
    channelName: null,
    setChannelId: (toSet) => set(state => ({
        channelId: toSet
    })),
    setChannelName: (toSet) => set(state => ({
        channelName: toSet
    }))
    })
)

export const useCreateMessage = create<CreateMessageStore>()((set) =>({
    message: "",
    setMessage: (toSet) => set(state => ({
        message: toSet
    }))
}))

export const useChannelMessage = create<ChannelMessagesStore>()((set) => ({
    messages: null,
    setMessages: (messagesToSet) => set(state => ({
        messages: messagesToSet
    }))
}))