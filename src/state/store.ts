import { create } from 'zustand'
import { ChannelIdStore, ChannelStore, UsersStore, UserStore } from '@/state/Interfaces'

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